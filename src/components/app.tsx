import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui';
import { RecoilRoot } from 'recoil';
import {
  AccountPage,
  SelectCityPage,
  SplashPage,
  BookingPage,
  RouteCityPage,
  BookingDetail,
  BookingHistoryPage,
} from '../pages';
import { ApolloProvider } from '@apollo/client';
import client from '../appoloClient';
import screenUrl from '../constants/screenUrl';
import { ToastContainer } from 'react-toastify';
import Footer from './layout/Footer';
import { useFooterStore } from '../store';
import { PhoneNumberProvider } from '../hooks/providers/PhoneNumberProvider';

const configRouter = [
  {
    path: screenUrl.splash,
    component: <SplashPage />,
  },
  {
    path: screenUrl.history,
    component: <BookingHistoryPage />,
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
  const { footerActive } = useFooterStore();

  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <PhoneNumberProvider>
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
                <ToastContainer />

                {footerActive && <Footer />}

              </ZMPRouter>
            </SnackbarProvider>
          </App>
        </PhoneNumberProvider>
      </ApolloProvider>
    </RecoilRoot>
  );
};
export default MyApp;
