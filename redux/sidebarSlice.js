import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sidebarAPI from "../services/sidebarAPI";

const initialState = {
  sidebarRequestStatus: "",
  allCategory: [],
  allLocation: [],
  selectedCategory: {},
  selectedLocation: {},
};

const getCategoriesAsync = createAsyncThunk(
  "sidebar/getCategories",
  sidebarAPI.getAllCategory
);
const getLocationsAsync = createAsyncThunk(
  "sidebar/getLocations",
  sidebarAPI.getAllLocation
);

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
    clearSelection: (state, action) => {
      state.selectedLocation = {};
      state.selectedCategory = {};
    },
  },
  extraReducers: {
    [getCategoriesAsync.pending]: (state) => {
      state.sidebarRequestStatus = "pending";
    },
    [getCategoriesAsync.rejected]: (state, action) => {
      state.sidebarRequestStatus = "rejected";
    },
    [getCategoriesAsync.fulfilled]: (state, action) => {
      state.sidebarRequestStatus = "fulfilled";
      state.allCategory = action.payload;
    },
    [getLocationsAsync.pending]: (state, action) => {
      state.sidebarRequestStatus = "pending";
    },
    [getLocationsAsync.rejected]: (state, action) => {
      state.sidebarRequestStatus = "rejected";
    },
    [getLocationsAsync.fulfilled]: (state, action) => {
      state.sidebarRequestStatus = "fulfilled";
      state.allLocation = action.payload;
    },
  },
});

export const {
  setCategory,
  setLocation,
  clearSelection,
} = sidebarSlice.actions;

export { getCategoriesAsync, getLocationsAsync };

export default sidebarSlice.reducer;
