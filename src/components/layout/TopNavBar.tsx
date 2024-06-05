import React from 'react';
import { Header, useNavigate } from 'zmp-ui';

interface IProps {
  title: string;
}

const TopNavBar: React.FC<IProps> = ({ title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return <Header title={title} onBackClick={handleClick} />;
};

export default TopNavBar;
