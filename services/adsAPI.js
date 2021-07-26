import ax from "./axios.config";

const createAd = async (data) => {
  try {
    return await ax.post("posts/create/", data);
  } catch (error) {
    return error;
  }
};

const getAllAd = async (params = { limit: 20, offset: 0 }) => {
  try {
    const res = await ax.get("posts/", { params: params });

    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return { results: [], count: 0, next: "" };
  }
};

const createFavouriteAd = async (data) => {
  try {
    return await ax.post("favourite-posts/", data);
  } catch (error) {
    return error;
  }
};

const getAdById = async (adId) => {
  try {
    const res = await ax.get(`posts/${adId}/`);
    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return {};
  }
};

const deleteFavouriteAd = async (adId) => {
  try {
    return await ax.delete(`favourite-posts/${adId}/`);
  } catch (error) {
    return error;
  }
};

const updateAdById = async (adId, data) => {
  try {
    return await ax.patch(`posts/${adId}/`, data);
  } catch (error) {
    return error;
  }
};

const deleteAd = async (adId) => {
  try {
    return await ax.delete(`posts/${adId}/`);
  } catch (error) {
    return error;
  }
};

const getMyAds = async () => {
  try {
    const res = await ax.get(`myposts/`);
    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return [];
  }
};

const getFavouriteAds = async () => {
  try {
    const res = await ax.get(`favourite-posts/`);
    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return [];
  }
};

const getAdBids = async (adId) => {
  try {
    const res = await ax.get(`posts/${adId}/bids/`);
    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

const postBid = async (adId, payload) => {
  try {
    const res = await ax.post(`posts/${adId}/bids/`, payload);

    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

const getAllNotice = async () => {
  try {
    const res = await ax.get("notices");

    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return [];
  }
};

export default {
  createAd,
  getAllAd,
  getAdById,
  getMyAds,
  deleteAd,
  updateAdById,
  postBid,
  getAdBids,
  getFavouriteAds,
  deleteFavouriteAd,
  createFavouriteAd,
  getAllNotice,
};
