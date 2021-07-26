import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "../redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "users"], // place to select which state you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export function initializeStore() {
  return configureStore({
    reducer: persistedReducer,
    middleware: middlewares,
  });
}
