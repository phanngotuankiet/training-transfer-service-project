import React from 'react';
import { Header } from 'zmp-ui';

const TopNavBar = ({ title }: { title: string }) => {
  return <Header title={title} onBackClick={() => {}} />;
};

export default TopNavBar;
