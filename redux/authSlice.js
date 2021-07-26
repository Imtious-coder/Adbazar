import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../services/authAPI";

const initialState = {
  profileRequestStatus: "",
  phoneNumberRequestStatus: "",
  user: {},
  phone_numbers: [],
  token: "",
};

const getUserProfileAsync = createAsyncThunk(
  "auth/getUserProfile",
  authAPI.getUserProfile
);

const getUserPhoneNumbersAsync = createAsyncThunk(
  "auth/getUserPhoneNumbers",
  authAPI.getUserPhoneNumbers
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, user } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: () => {
      return initialState;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [getUserProfileAsync.pending]: (state) => {
      state.profileRequestStatus = "pending";
    },
    [getUserProfileAsync.rejected]: (state, action) => {
      state.profileRequestStatus = "rejected";
    },
    [getUserProfileAsync.fulfilled]: (state, action) => {
      state.profileRequestStatus = "fulfilled";
      state.user = action.payload;
    },
    [getUserPhoneNumbersAsync.pending]: (state) => {
      state.phoneNumberRequestStatus = "pending";
    },
    [getUserPhoneNumbersAsync.rejected]: (state, action) => {
      state.phoneNumberRequestStatus = "rejected";
    },
    [getUserPhoneNumbersAsync.fulfilled]: (state, action) => {
      state.phoneNumberRequestStatus = "fulfilled";
      state.phone_numbers = action.payload;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;

export { getUserProfileAsync, getUserPhoneNumbersAsync };

export default authSlice.reducer;
