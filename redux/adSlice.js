import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adsAPI from "../services/adsAPI";

const initialState = {
  adsRequestStatus: "",
  moreAdsRequestStatus: "",
  adByIdRequestStatus: "",
  myadRequestStatus: "",
  adBidRequestStatus: "",
  favouriteAdsRequestStatus: "",
  allAds: [],
  total: 0,
  next: "",
  adById: {},
  myAds: [],
  adBids: [],
  favouriteAds: [],
  notices: [],
};

const getAdsAsync = createAsyncThunk("ads/getAllAds", adsAPI.getAllAd);
const getMoreAdsAsync = createAsyncThunk("ads/getMoreAds", adsAPI.getAllAd);
const getAdByIdAsync = createAsyncThunk("ads/getAdById", adsAPI.getAdById);
const getMyAdsAsync = createAsyncThunk("ads/getMyAds", adsAPI.getMyAds);
const getAdBidsAsync = createAsyncThunk("ads/getAdBids", adsAPI.getAdBids);
const getFavouriteAdsAsync = createAsyncThunk(
  "ads/getFavouriteAds",
  adsAPI.getFavouriteAds
);
const getNoticesAsync = createAsyncThunk("ads/getNotices", adsAPI.getAllNotice);

const adSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {},
  extraReducers: {
    [getAdsAsync.pending]: (state) => {
      state.adsRequestStatus = "pending";
    },
    [getAdsAsync.rejected]: (state, action) => {
      state.adsRequestStatus = "rejected";
    },
    [getAdsAsync.fulfilled]: (state, action) => {
      state.adsRequestStatus = "fulfilled";
      state.allAds = action.payload.results;
      state.total = action.payload.count;
      state.next = action.payload.next;
    },
    [getMoreAdsAsync.pending]: (state) => {
      state.moreAdsRequestStatus = "pending";
    },
    [getMoreAdsAsync.rejected]: (state, action) => {
      state.moreAdsRequestStatus = "rejected";
    },
    [getMoreAdsAsync.fulfilled]: (state, action) => {
      state.moreAdsRequestStatus = "fulfilled";
      state.allAds = [...state.allAds, ...action.payload.results];
      state.total = action.payload.count;
      state.next = action.payload.next;
    },
    [getAdByIdAsync.pending]: (state) => {
      state.adByIdRequestStatus = "pending";
    },
    [getAdByIdAsync.rejected]: (state, action) => {
      state.adByIdRequestStatus = "rejected";
    },
    [getAdByIdAsync.fulfilled]: (state, action) => {
      state.adByIdRequestStatus = "fulfilled";
      state.adById = action.payload;
    },
    [getMyAdsAsync.pending]: (state) => {
      state.myadRequestStatus = "pending";
    },
    [getMyAdsAsync.rejected]: (state, action) => {
      state.myadRequestStatus = "rejected";
    },
    [getMyAdsAsync.fulfilled]: (state, action) => {
      state.myadRequestStatus = "fulfilled";
      state.myAds = action.payload;
    },
    [getAdBidsAsync.pending]: (state) => {
      state.adBidRequestStatus = "pending";
    },
    [getAdBidsAsync.rejected]: (state, action) => {
      state.adBidRequestStatus = "rejected";
    },
    [getAdBidsAsync.fulfilled]: (state, action) => {
      state.adBidRequestStatus = "fulfilled";
      state.adBids = action.payload;
    },
    [getFavouriteAdsAsync.pending]: (state) => {
      state.favouriteAdsRequestStatus = "pending";
    },
    [getFavouriteAdsAsync.rejected]: (state, action) => {
      state.favouriteAdsRequestStatus = "rejected";
    },
    [getFavouriteAdsAsync.fulfilled]: (state, action) => {
      state.favouriteAdsRequestStatus = "fulfilled";
      state.favouriteAds = action.payload;
    },

    [getNoticesAsync.fulfilled]: (state, action) => {
      state.notices = action.payload;
    },
  },
});

export const { setAdToEdit } = adSlice.actions;

export {
  getAdsAsync,
  getMoreAdsAsync,
  getAdByIdAsync,
  getMyAdsAsync,
  getAdBidsAsync,
  getFavouriteAdsAsync,
  getNoticesAsync,
};

export default adSlice.reducer;
