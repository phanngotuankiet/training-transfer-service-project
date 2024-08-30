import { useCallback } from 'react';
import { openChat } from "zmp-sdk/apis";

const useOpenChatScreen = () => {
  const openChatScreen = useCallback(async () => {

    await openChat({
      type: "oa", // Open the chat with an Official Account (OA)
      id: "2084647600244066498", // The specific OA ID you want to chat with
      message: "Xin chào phía đặt xe của Naikyo ạ 😊", // Initial message to be sent in the chat
    });

  }, []);

  return openChatScreen;
};

export default useOpenChatScreen;
