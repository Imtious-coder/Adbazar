import Head from "next/head";
import Router from "next/router";
import App from "next/app";
import NProgress from "nprogress";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { appWithTranslation } from "../i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "nprogress/nprogress.css";
import "../styles/globals.css";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
  constructor(props) {
    super(props);
    this.persistor = persistStore(props.reduxStore);
  }

  componentDidMount() {
    Router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    });

    // if ("serviceWorker" in navigator) {
    //   window.addEventListener("load", function () {
    //     navigator.serviceWorker.register("/firebase-messaging-sw.js").then(
    //       function (registration) {
    //         console.log(
    //           "Service Worker registration successful with scope: ",
    //           registration.scope
    //         );
    //       },
    //       function (err) {
    //         console.log("Service Worker registration failed: ", err);
    //       }
    //     );
    //   });
    // }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <>
        <Head>
          <title>Adbazar</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Provider store={reduxStore}>
          <PersistGate
            loading={<Component {...pageProps} isHydrating />}
            persistor={this.persistor}
          >
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </>
    );
  }
}

export default appWithTranslation(withReduxStore(MyApp));
