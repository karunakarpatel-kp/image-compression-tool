import { ThemeProvider } from "@emotion/react";
import { Router, useRouter } from "next/router";
import { ReactElement, ReactNode, useEffect } from "react";

import { AppProps } from "next/app";
import { NextComponentType, NextPage } from "next";
import nProgress from "nprogress";

import "../styles/globals.css";
import "../public/fonts/font.css";
import "../styles/nProgress.css";
import { Provider } from "react-redux";
import store from "store/centralStore";

// Layout of the Nextjs Page with TypeScript...!
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

const _app = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
    </>
  );
  // return <>{getLayout(<Component {...pageProps} />)}</>;
};

export default _app;
