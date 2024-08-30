import React, { createContext, useContext } from "react";
import usePhoneNumberCheck from "../usePhoneNumberCheck";

interface PhoneNumberContextType {
  hasPhone: boolean | null;
}

const PhoneNumberContext = createContext<PhoneNumberContextType | undefined>(undefined);

export const PhoneNumberProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { hasPhone } = usePhoneNumberCheck();

  return (
    <PhoneNumberContext.Provider value={{ hasPhone }}>
      {children}
    </PhoneNumberContext.Provider>
  );
};

export const usePhoneNumber = () => {
  const context = useContext(PhoneNumberContext);
  if (!context) {
    throw new Error("usePhoneNumber must be used within a PhoneNumberProvider");
  }
  return context;
};
