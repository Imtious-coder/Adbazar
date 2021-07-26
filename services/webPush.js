import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";

const firebaseCloudMessaging = {
  //checking whether token is available in indexed DB
  tokenInlocalforage: async () => {
    return localforage.getItem("fcm_token");
  },
  //initializing firebase app
  init: async function () {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyDY9eTb5VIM-lPHpLqAIUlxXO-reLgahtE",
        authDomain: "adbazar-95baa.firebaseapp.com",
        projectId: "adbazar-95baa",
        storageBucket: "adbazar-95baa.appspot.com",
        messagingSenderId: "784378806262",
        appId: "1:784378806262:web:991ff589b9fff6218311d7",
        measurementId: "G-69SX1XHVXH",
      });
      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = await this.tokenInlocalforage();
        //if FCM token is already there just return the token
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }
        //requesting notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
          //getting token from FCM
          const fcm_token = await messaging.getToken();
          if (fcm_token) {
            //setting FCM token in indexed db using localforage
            localforage.setItem("fcm_token", fcm_token);
            console.log("fcm token", fcm_token);
            //return the FCM token after saving it
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
export { firebaseCloudMessaging };
