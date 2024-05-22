import React, { useState } from 'react';
import { BottomNavigation } from 'zmp-ui';
import { SearchSvg, LocationSvg, AccountSvg } from '../../assets/svgs';
import screenUrl from '../../constants/screenUrl';

const configBottomNavbar = [
  {
    key: 'history',
    label: 'Lịch sử',
    icon: <SearchSvg />,
    activeIcon: <SearchSvg color="#006AF5" />,
    to: screenUrl.history,
  },
  {
    key: 'booking',
    label: 'Đặt chuyến',
    icon: <LocationSvg />,
    activeIcon: <LocationSvg color="#006AF5" />,
    to: screenUrl.selectCity,
  },
  {
    key: 'account',
    label: 'Tài khoản',
    icon: <AccountSvg />,
    activeIcon: <AccountSvg color="#006AF5" />,
    to: screenUrl.account,
  },
];

const Footer = () => {
  const [activeTab, setActiveTab] = useState('booking');
  return (
    <BottomNavigation
      fixed
      activeKey={activeTab}
      onChange={(key) => {
        setActiveTab(key);
      }}
    >
      {configBottomNavbar.map((route) => {
        return (
          <BottomNavigation.Item
            key={route.key}
            label={route.label}
            icon={route.icon}
            activeIcon={route.activeIcon}
            linkTo={route.to}
          />
        );
      })}
    </BottomNavigation>
  );
};

export default Footer;
