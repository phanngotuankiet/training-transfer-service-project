import { getAccessToken, authorize } from "zmp-sdk/apis";
import { useLoginMutation } from "../generated/graphql";
import useAuthStore from "../store/authStore";
import usePhoneTokenStore from "../store/phoneTokenStore";

const useLogin = () => {
  const [loginActionMutation] = useLoginMutation({});
  const { token, setToken, setUserId, setZaloId, setZaloToken, setName } = useAuthStore();
  const { setIsloadingPhoneGet } = usePhoneTokenStore();

  const handleSaveUserInfoAfterLogin = (data: { token: string, userId: number, zaloId: string, name: string }) => {
    setToken(data.token);
    setUserId(data.userId);
    setZaloId(data.zaloId);
    setName(data.name);
  };

  const handleGetToken = async () => {
    return new Promise((resolve, reject) => {
      authorize({
        scopes: ['scope.userInfo'],
        success: async () => {
          try {
            const accessTokenGet = await getAccessToken({});
            console.log("accesstoken từ zalo: ", accessTokenGet);

            // lưu token zalo (không phải của mình) vào global
            setZaloToken(accessTokenGet);

            setIsloadingPhoneGet(true);

            // Chờ 1 giây để setAccessToken thành công
            setTimeout(async () => {
              await handleLogin(accessTokenGet);
              resolve(true); // Thành công
            }, 1000);
          } catch (error) {
            console.error("Error during success callback", error);
            resolve(false); // Có lỗi
          }
        },
        fail: (data) => {
          setIsloadingPhoneGet(false);

          resolve(false); // Thất bại
        },
      });
    });
  };


  const handleLogin = async (tokenPassed: string) => {

    console.log("chạm vào [handleLogin]");

    try {
      const { data } = await loginActionMutation({
        variables: { token: tokenPassed },
        fetchPolicy: "no-cache"
      });

      if (data?.actionLogin) {
        const wannaSaveToken = data.actionLogin.token;
        const wannaSaveUserId = Number(data.actionLogin.userId);
        const wannaSaveZaloId = data.actionLogin.zaloId;

        const wannaSaveName = data.actionLogin.name;

        // lưu vào LS để graphql dùng
        localStorage.setItem('token', wannaSaveToken);
        localStorage.setItem('name', wannaSaveName);
        localStorage.setItem('userId', wannaSaveUserId.toString());
        localStorage.setItem('zaloId', wannaSaveZaloId);

        handleSaveUserInfoAfterLogin({ token: wannaSaveToken, userId: wannaSaveUserId, zaloId: wannaSaveZaloId, name: wannaSaveName });
      }

      return { loginStatus: true };
    } catch (error) {
      console.log("Error [handleLogin]", error);
      return { loginStatus: false };
    }
  };

  const handleClickActivelyLogin = async () => {
    // nếu login rồi thì k cần gọi lấy access zalo
    if (token) {
      return true;
    }

    const loginTokenZalo = await handleGetToken();

    return loginTokenZalo;
  };

  return {
    // handleLogin,
    handleClickActivelyLogin,
  };
}

export default useLogin;
