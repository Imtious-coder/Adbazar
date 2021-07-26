import ax from "./axios.config";

const getDashboardCount = async () => {
  try {
    const res = await ax.get("account/auth/dashboard");
    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

const getAllMembership = async () => {
  try {
    const res = await ax.get("account/membership/packages/");
    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return [];
  }
};

const getAllTopAdPackages = async () => {
  try {
    const res = await ax.get("account/top-post/packages/");
    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return [];
  }
};

const getAllPaymentMethod = async () => {
  try {
    const res = await ax.get("account/payment-methods/");
    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return [];
  }
};

const buyMembership = async (data) => {
  try {
    const res = await ax.post("account/membership-request/", data);
    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

const upgradeToFree = async () => {
  try {
    return await ax.post("account/membership/free/");
  } catch (error) {
    return error;
  }
};

const makeTopAd = async (data) => {
  try {
    const res = await ax.post("account/toppost-request/", data);
    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

export default {
  getDashboardCount,
  getAllMembership,
  getAllTopAdPackages,
  getAllPaymentMethod,
  buyMembership,
  makeTopAd,
  upgradeToFree,
};
