/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout/Layout";
import SearchBar from "../components/SearchBar/SearchBar";
import AllAds from "../components/ads/AllAds";
import { clearSelection } from "../redux/sidebarSlice";

export default function Posts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearSelection());
  }, []);

  // useEffect(() => {
  //   setToken();
  //   async function setToken() {
  //     try {
  //       const token = await firebaseCloudMessaging.init();
  //       if (token) {
  //         console.log(token);
  //         getMessage();
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   function getMessage() {
  //     const messaging = firebase.messaging();
  //     messaging.onMessage((message) => console.log("foreground", message));
  //   }
  // }, []);

  return (
    <Layout>
      <SearchBar />
      <AllAds />
    </Layout>
  );
}
