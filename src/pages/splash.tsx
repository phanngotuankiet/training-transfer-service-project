import React, { useEffect } from 'react';
import { Page, useNavigate } from 'zmp-ui';
import useSplashStore from '../store/splashStore';
import screenUrl from '../constants/screenUrl';

const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { offSpash } = useSplashStore();

  useEffect(() => {
    setTimeout(() => {
      offSpash();
      navigate(screenUrl.selectCity);
    }, 2000);
  }, []);

  return (
    <div>
      <Page className="page">Splash screen</Page>
    </div>
  );
};

export default HomePage;
