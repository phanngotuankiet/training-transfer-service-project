import React from 'react';
import { Route } from 'react-router-dom';
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui';
import { RecoilRoot } from 'recoil';
import { AccountPage, HistoryPage, SelectCityPage, SplashPage } from '../pages';
import { ApolloProvider } from '@apollo/client';
import client from '../appoloClient';
import Footer from './layout/Footer';
import screenUrl from '../constants/screenUrl';
import useSplashStore from '../store/splashStore';

const configRouter = [
  {
    path: screenUrl.splash,
    component: <SplashPage />,
  },
  {
    path: screenUrl.history,
    component: <HistoryPage />,
  },
  {
    path: screenUrl.selectCity,
    component: <SelectCityPage />,
  },
  {
    path: screenUrl.account,
    component: <AccountPage />,
  },
];

const MyApp = () => {
  const { splashActive } = useSplashStore();

  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <App>
          <SnackbarProvider>
            <ZMPRouter>
              <AnimationRoutes>
                {configRouter.map((route, index) => {
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.component}
                    />
                  );
                })}
              </AnimationRoutes>
              {splashActive && <Footer />}
            </ZMPRouter>
          </SnackbarProvider>
        </App>
      </ApolloProvider>
    </RecoilRoot>
  );
};
export default MyApp;
