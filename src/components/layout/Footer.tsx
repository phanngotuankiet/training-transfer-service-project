import React, { useEffect, useState } from 'react';
import { BottomNavigation, Icon } from 'zmp-ui';
import { LocationSvg, AccountSvg } from '../../assets/svgs';
import screenUrl from '../../constants/screenUrl';
import { useLocation } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import useOpenChatScreen from '../../utils/openChat';

const Footer = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('booking');
  const { userId } = useAuthStore();
  const openChatScreen = useOpenChatScreen();

  const configBottomNavbar = [
    {
      key: 'message',
      label: 'Liên hệ OA',
      icon: <Icon icon="zi-chat" className="text-[#98a1a8]" />,
      activeIcon: <Icon icon="zi-chat" className="text-[#006AF5]" />,
      action: () => openChatScreen(),
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

  useEffect(() => {
    const currentTab = configBottomNavbar.find(
      (route) => route.to === location.pathname,
    );
    if (currentTab) {
      setActiveTab(currentTab.key);
    }
  }, [location.pathname]);

  // khi đã đăng nhập thì mới hiển thị ra ô 'Liên hệ OA'
  const filteredItems = userId === null
    ? configBottomNavbar.filter((item) => item.key !== 'message')
    : configBottomNavbar;

  return (
    <BottomNavigation
      fixed
      activeKey={activeTab}
      onChange={(key) => {
        setActiveTab(key);
      }}
    >
      {filteredItems.map((route) => {
        const handleItemClick = () => {
          if (route.action) {
            route.action(); // Execute the action if 'action' is defined
          }
        };

        return (
          <BottomNavigation.Item
            key={route.key}
            label={route.label}
            icon={route.icon}
            activeIcon={route.activeIcon}
            linkTo={route.to ? route.to : undefined} // `linkTo` handles navigation automatically
            onClick={route.action ? handleItemClick : undefined} // Only set `onClick` if there's an action
          />
        );
      })}
    </BottomNavigation>
  );
};

export default Footer;
