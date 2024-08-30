import { useState, useEffect } from 'react';
import { getUserInfo } from 'zmp-sdk/apis';

const useCheckFollowStatus = (checkToken: string | null) => {
  const [isFollowing, setIsFollowing] = useState<boolean | null>(null);

  useEffect(() => {

    if (!checkToken) {
      return;
    }

    const checkFollowStatus = async () => {

      getUserInfo({
        success: (data) => {
          const { userInfo } = data;

          setIsFollowing(userInfo.followedOA!);
        },
        fail: (error) => {
          console.error("Failed to check follow status:", error);
          setIsFollowing(false); // Assume not following on error
        }
      });

    };

    checkFollowStatus();
  }, [checkToken]);

  return isFollowing;
};

export default useCheckFollowStatus;
