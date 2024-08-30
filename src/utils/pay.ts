import { Payment } from "zmp-sdk";
// import { HmacInput, useCreateHmacMutation } from "../generated/graphql";
import useAuthStore from "../store/authStore";

const usePay = () => {
  // const [createHmacMutation] = useCreateHmacMutation({});
  const { setOrderId } = useAuthStore();

  const pay = (paymentData: any, description?: string) =>
    new Promise(async (resolve, reject) => {

      // chuyển qua HmacInput
      // let requestModel: HmacInput = {
      //   desc: description ?? "Thanh toán chuyến xe",
      //   item: [{ id: paymentData.id, amount: paymentData.amount }],
      //   amount: paymentData.amount,
      //   method: JSON.stringify({
      //     id: "COD",
      //     isCustom: false,
      //   })
      // };

      // Tạo HMAC code từ server
      // let macCode;
      // try {
      //   const { data } = await createHmacMutation({
      //     variables: {
      //       input: requestModel,
      //     },
      //   });

      //   macCode = data?.createHMAC.hmac;

      // } catch (error) {

      //   console.error("Lỗi khi lấy macCode:", error.message);

      //   reject(error);
      // }

      // console.log("macCode", macCode);

      // Gọi API thanh toán COD
      try {
        const { orderId } = await Payment.createOrder({
          amount: paymentData.amount,
          desc: description ?? "Thanh toan chuyen xe",
          item: [{ id: paymentData.id, amount: paymentData.amount }],
          method: { id: "COD", isCustom: false },
        });

        console.log("Tạo đơn hàng thành công", orderId);

        // lưu orderId vào global
        setOrderId(orderId);

        // khúc này tạo record mới trong bảng 'bookings'

        resolve(orderId);
      } catch (err) {
        console.error("Lỗi khi tạo đơn hàng:", err);

        reject(err);
      }

    });

  return { pay };
};

export default usePay;
