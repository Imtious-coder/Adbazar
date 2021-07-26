import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import chatAPI from "../services/chatAPI";

const initialState = {
  channelsRequestStatus: "",
  chatsRequestStatus: "",
  chatCountRequestStatus: "",
  channels: [],
  chats: [],
  unread_chat_count: 0,
};

const getChannlesAsync = createAsyncThunk(
  "chat/getAllChannels",
  chatAPI.getAllUserChannel
);

const getChatsByChannelAsync = createAsyncThunk(
  "chat/getChatsByChannel",
  chatAPI.getChatsByChannel
);

const getUnreadChatAsync = createAsyncThunk(
  "chat/unreadChatCount",
  chatAPI.getChatCount
);

const channelSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: {
    [getChannlesAsync.pending]: (state) => {
      state.channelsRequestStatus = "pending";
    },
    [getChannlesAsync.rejected]: (state, action) => {
      state.channelsRequestStatus = "rejected";
    },
    [getChannlesAsync.fulfilled]: (state, action) => {
      state.channelsRequestStatus = "fulfilled";
      state.channels = action.payload;
    },
    [getChatsByChannelAsync.pending]: (state) => {
      state.chatsRequestStatus = "pending";
    },
    [getChatsByChannelAsync.rejected]: (state, action) => {
      state.chatsRequestStatus = "rejected";
    },
    [getChatsByChannelAsync.fulfilled]: (state, action) => {
      state.chatsRequestStatus = "fulfilled";
      state.chats = action.payload;
    },
    [getUnreadChatAsync.pending]: (state) => {
      state.chatCountRequestStatus = "pending";
    },
    [getUnreadChatAsync.rejected]: (state, action) => {
      state.chatCountRequestStatus = "rejected";
    },
    [getUnreadChatAsync.fulfilled]: (state, action) => {
      state.chatCountRequestStatus = "fulfilled";
      state.unread_chat_count = action.payload;
    },
  },
});

export const {} = channelSlice.actions;

export { getChannlesAsync, getChatsByChannelAsync, getUnreadChatAsync };

export default channelSlice.reducer;
