importScripts("https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js");

var firebaseConfig = {
  apiKey: "AIzaSyDY9eTb5VIM-lPHpLqAIUlxXO-reLgahtE",
  authDomain: "adbazar-95baa.firebaseapp.com",
  projectId: "adbazar-95baa",
  storageBucket: "adbazar-95baa.appspot.com",
  messagingSenderId: "784378806262",
  appId: "1:784378806262:web:991ff589b9fff6218311d7",
  measurementId: "G-69SX1XHVXH",
};

firebase.initializeApp(firebaseConfig);

/**
 * define message const
 */

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) =>
  console.log("payload", payload)
);

self.addEventListener("push", function (e) {
  console.log("hello world");
  if (!(self.Notification && self.Notification.permission === "granted")) {
    //notifications aren't supported or permission not granted!
    return;
  }
});
