import { useEffect, useState } from "react";
import { getSetting } from "zmp-sdk/apis";

const usePhoneNumberCheck = () => {
  const [hasPhone, setHasPhone] = useState(false);

  useEffect(() => {
    const checkSettings = async () => {
      try {
        const settings = await getSetting({});
        const phoneNumberProvided = settings.authSetting["scope.userPhonenumber"];

        setHasPhone(phoneNumberProvided || false);
      } catch (err) {
      }
    };

    checkSettings();
  }, []);

  return { hasPhone };
};

export default usePhoneNumberCheck;
