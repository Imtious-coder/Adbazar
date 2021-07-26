import ax from "./axios.config";

const getAllCategory = async (params = {}) => {
  try {
    const res = await ax.get("categories", { params: params });
    return res.data;
  } catch (error) {
    return [];
  }
};

const getAllLocation = async (params = {}) => {
  try {
    const res = await ax.get("locations/", params);
    return res.data;
  } catch (error) {
    return [];
  }
};

export default {
  getAllCategory,
  getAllLocation,
};
