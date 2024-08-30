import { useCallback } from 'react';
import { unfollowOA } from "zmp-sdk/apis";

const useUnfollowOA = () => {
  const unfollow = useCallback(async () => {
    try {
      await unfollowOA({
        id: "2084647600244066498"
      });
    } catch (error) {
      // Handle API call failure
      console.log("Error when unfollowing OA:", error);
    }
  }, []);

  return unfollow;
};

export default useUnfollowOA;
