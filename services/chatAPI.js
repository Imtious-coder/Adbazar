import ax from "./axios.config";

const createNewChannel = async (data) => {
  try {
    const res = await ax.post("chat/channels/", data);

    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

const createNewChat = async (data) => {
  try {
    const res = await ax.post("chat/create/", data);

    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

const getAllUserChannel = async () => {
  try {
    const res = await ax.get("chat/channels/");

    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return [];
  }
};

const getChatsByChannel = async (channelId) => {
  try {
    const res = await ax.get(`chat/channels/${channelId}/`);

    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

const getChatCount = async () => {
  try {
    const res = await ax.get("chat/chat_count/");

    if (/20[0-6]/g.test(res.status)) {
      return res.data.new_chat_count;
    }
  } catch (error) {
    return 0;
  }
};

const createNewContact = async (data) => {
  try {
    return await ax.post("chat/contact/", data);
  } catch (error) {
    return error;
  }
};

export default {
  createNewChannel,
  createNewChat,
  getAllUserChannel,
  getChatsByChannel,
  getChatCount,
  createNewContact,
};
