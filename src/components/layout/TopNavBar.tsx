import React from 'react';
import { Header } from 'zmp-ui';

interface IProps {
  title: string;
  cancel?: () => void;
}

const TopNavBar: React.FC<IProps> = ({ title, cancel }) => {
  return <Header title={title} onBackClick={cancel} />;
};

export default TopNavBar;
