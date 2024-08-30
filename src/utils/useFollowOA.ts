import { useCallback } from 'react';
import { followOA } from 'zmp-sdk/apis';

const useFollowOA = () => {
  const follow = useCallback(async () => {
    try {
      await followOA({
        id: "2084647600244066498",
      });

    } catch (error) {
      // Handle API call failure
      console.error("Lỗi khi follow OA:", error);
    }
  }, []);

  return follow;
};

export default useFollowOA;
