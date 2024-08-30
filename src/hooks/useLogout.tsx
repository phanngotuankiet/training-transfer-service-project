import { useEffect, useCallback } from "react";
import { getSetting } from "zmp-sdk/apis";
import useAuthStore from "../store/authStore";
import usePhoneTokenStore from "../store/phoneTokenStore";

const useLogout = () => {
  const { clearAuth } = useAuthStore();
  const { resetPhoneToken } = usePhoneTokenStore();

  const logout = useCallback(async () => {
    try {
      const { authSetting } = await getSetting({});

      const userInfoProvided = authSetting["scope.userInfo"];
      const phoneNumberProvided = authSetting["scope.userPhonenumber"];

      if (!userInfoProvided || !phoneNumberProvided) {
        clearAuth();
        resetPhoneToken();
        localStorage.clear();
      }
    } catch (error) {
      console.error("Failed to check user info:", error);
    }
  }, [clearAuth, resetPhoneToken]);

  return logout; // Trả về hàm logout
};

export default useLogout;
