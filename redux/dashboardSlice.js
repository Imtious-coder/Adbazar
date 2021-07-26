import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dashboardAPI from "../services/dashboardAPI";

const initialState = {
  dashboardCountRequestStatus: "",
  membershipRequestStatus: "",
  topAdPackageRequestStatus: "",
  paymentMethodRequestStatus: "",
  dashboardCount: {},
  memberships: [],
  topAdPackages: [],
  paymentMethods: [],
};

const getDashboardCountAsync = createAsyncThunk(
  "dashboard/getAdCount",
  dashboardAPI.getDashboardCount
);

const getAllMembershipAsync = createAsyncThunk(
  "dashboard/getAllMembership",
  dashboardAPI.getAllMembership
);

const getAllTopAdPackagesAsync = createAsyncThunk(
  "dashboard/getAllTopAdPackages",
  dashboardAPI.getAllTopAdPackages
);
const getAllPaymentMethodAsync = createAsyncThunk(
  "dashboard/getAllPaymentMethod",
  dashboardAPI.getAllPaymentMethod
);

const adSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: {
    [getDashboardCountAsync.pending]: (state) => {
      state.adsRequestStatus = "pending";
    },
    [getDashboardCountAsync.rejected]: (state, action) => {
      state.adsRequestStatus = "rejected";
    },
    [getDashboardCountAsync.fulfilled]: (state, action) => {
      state.adsRequestStatus = "fulfilled";
      state.dashboardCount = action.payload;
    },
    [getAllMembershipAsync.pending]: (state) => {
      state.membershipRequestStatus = "pending";
    },
    [getAllMembershipAsync.rejected]: (state, action) => {
      state.membershipRequestStatus = "rejected";
    },
    [getAllMembershipAsync.fulfilled]: (state, action) => {
      state.membershipRequestStatus = "fulfilled";
      state.memberships = action.payload;
    },
    [getAllPaymentMethodAsync.pending]: (state) => {
      state.paymentMethodRequestStatus = "pending";
    },
    [getAllPaymentMethodAsync.rejected]: (state, action) => {
      state.paymentMethodRequestStatus = "rejected";
    },
    [getAllPaymentMethodAsync.fulfilled]: (state, action) => {
      state.paymentMethodRequestStatus = "fulfilled";
      state.paymentMethods = action.payload;
    },
    [getAllTopAdPackagesAsync.pending]: (state) => {
      state.topAdPackageRequestStatus = "pending";
    },
    [getAllTopAdPackagesAsync.rejected]: (state, action) => {
      state.topAdPackageRequestStatus = "rejected";
    },
    [getAllTopAdPackagesAsync.fulfilled]: (state, action) => {
      state.topAdPackageRequestStatus = "fulfilled";
      state.topAdPackages = action.payload;
    },
  },
});

export const {} = adSlice.actions;

export {
  getDashboardCountAsync,
  getAllMembershipAsync,
  getAllPaymentMethodAsync,
  getAllTopAdPackagesAsync,
};

export default adSlice.reducer;
