import React from 'react';
import { Route } from 'react-router-dom';
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui';
import { RecoilRoot } from 'recoil';
import {
  AccountPage,
  HistoryPage,
  SelectCityPage,
  SplashPage,
  BookingPage,
  RouteCityPage,
  BookingDetail,
} from '../pages';
import { ApolloProvider } from '@apollo/client';
import client from '../appoloClient';
import Footer from './layout/Footer';
import screenUrl from '../constants/screenUrl';
import useSplashStore from '../store/splashStore';
import { useFooterStore } from '../store';
import { ToastContainer } from 'react-toastify';
import RouteCity from '../pages/RouteCity';

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
  {
    path: screenUrl.routeCity,
    component: <RouteCityPage />,
  },
  {
    path: screenUrl.booking,
    component: <BookingPage />,
  },
  {
    path: screenUrl.bookingDetail,
    component: <BookingDetail />,
  },
];

const MyApp = () => {
  const { splashActive } = useSplashStore();
  const { footerActive } = useFooterStore();

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
              {!splashActive && footerActive && <Footer />}
              <ToastContainer />
            </ZMPRouter>
          </SnackbarProvider>
        </App>
      </ApolloProvider>
    </RecoilRoot>
  );
};
export default MyApp;
