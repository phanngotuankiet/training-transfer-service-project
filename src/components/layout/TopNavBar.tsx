import React from 'react';
import { Header, useNavigate } from 'zmp-ui';
import { useFooterStore, useSplashStore } from '../../store';

interface IProps {
  footerActive: boolean;
  title: string;
}

const TopNavBar: React.FC<IProps> = ({ title, footerActive }) => {
  const { setFooter } = useFooterStore();
  const navigate = useNavigate();

  const handleClick = () => {
    setFooter(!footerActive);
    navigate(-1);
  };

  return <Header title={title} onBackClick={handleClick} />;
};

export default TopNavBar;
