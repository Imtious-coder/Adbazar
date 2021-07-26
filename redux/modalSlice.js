import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  successMessage: "",
  errorMessage: "",
  confirmModalLoading: false,
  deleteModalLoading: false,
  activeConfirmModal: false,
  activeDeleteModal: false,
  activeCategoryModal: false,
  activeCategorySearchModal: false,
  activeLocationModal: false,
  activeLocationSearchModal: false,
  activeSuccessModal: false,
  activeErrorModal: false,
  activeAdpostModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setActiveCategoryModal: (state, action) => {
      state.activeCategoryModal = action.payload;
    },
    setActiveCategorySearchModal: (state, action) => {
      state.activeCategorySearchModal = action.payload;
    },
    setActiveLocationModal: (state, action) => {
      state.activeLocationModal = action.payload;
    },
    setActiveLocationSearchModal: (state, action) => {
      state.activeLocationSearchModal = action.payload;
    },
    setActiveConfirmModal: (state, action) => {
      state.activeConfirmModal = action.payload;
    },
    setConfirmModalLoading: (state, action) => {
      state.confirmModalLoading = action.payload;
    },
    setActiveDeleteModal: (state, action) => {
      state.activeDeleteModal = action.payload;
    },
    setDeleteModalLoading: (state, action) => {
      state.deleteModalLoading = action.payload;
    },
    setActiveSuccessModal: (state, action) => {
      const { active, message } = action.payload;
      state.activeSuccessModal = active;
      state.successMessage = message;
    },
    setActiveErrorModal: (state, action) => {
      const { active, message } = action.payload;
      state.errorMessage = message;
      state.activeErrorModal = active;
    },
    setActiveAdpostModal: (state, action) => {
      state.activeAdpostModal = action.payload;
    },
  },
});

export const {
  setActiveLocationModal,
  setActiveCategoryModal,
  setActiveCategorySearchModal,
  setActiveLocationSearchModal,
  setActiveConfirmModal,
  setConfirmModalLoading,
  setActiveDeleteModal,
  setDeleteModalLoading,
  setActiveSuccessModal,
  setActiveErrorModal,
  setActiveAdpostModal,
} = modalSlice.actions;
export default modalSlice.reducer;
