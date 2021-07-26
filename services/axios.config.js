import axios from "axios";
import helpers from "./axios.helper";
import router from "next/router";
import { i18n } from "../i18n";

const devUrl = `http://localhost:8000/api/v1/`;
const prodUrl = "https://api.adbazar.net/api/v1/";

const _axios = axios.create({
  baseURL: prodUrl,
  // withCredentials: true,
});

_axios.interceptors.request.use(
  function (config) {
    config.headers["Accept-Language"] = i18n.language;
    config = helpers.setTokenInHeader(config);

    return config;
  },
  function (error) {
    console.log(error.config);
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log("XXXX - AJAX ERROR - XXXX", error);
    // if (
    //   (error.response && error.response.status === 401) ||
    //   (error.response && error.response.status === 403)
    // ) {
    //   AuthSrv.logOut().then((_) => {
    //     const isServer = typeof window === "undefined";
    //     if (!isServer) {
    //       window["__NEXT_REDUX_STORE__"].dispatch(signOut());
    //       window["__NEXT_REDUX_STORE__"].dispatch(resetShop());
    //     }
    //     router.push("/");
    //     return Promise.reject(error);
    //   });
    //   router.push("/");
    //   return Promise.reject(error);
    // }
    return Promise.reject(error);
  }
);

export default _axios;
