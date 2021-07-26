import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./authSlice";
import SidebarReducer from "./sidebarSlice";
import ModalSlice from "./modalSlice";
import AdSlice from "./adSlice";
import DashboardSlice from "./dashboardSlice";
import ChatSlice from "./chatSlice";

const rootReducer = combineReducers({
  // Put reducers here
  auth: AuthReducer,
  sidebar: SidebarReducer,
  modal: ModalSlice,
  ads: AdSlice,
  dashboard: DashboardSlice,
  dashboard: DashboardSlice,
  chat: ChatSlice,
});

export default rootReducer;
