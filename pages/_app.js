import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { NotificationContextProvider } from "../store/notification-context";
// import Head from "next/head";
import React from "react";
// import mapboxgl from 'mapbox-gl';
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <NotificationContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NotificationContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
