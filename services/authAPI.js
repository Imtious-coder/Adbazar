import ax from "./axios.config";

const register = async (data) => {
  try {
    return await ax.post("account/users/", data);
  } catch (error) {
    return error;
  }
};

const login = async (data) => {
  try {
    return await ax.post("account/auth/", data);
  } catch (error) {
    return error;
  }
};

const login2 = async (data) => {
  try {
    return await ax.post("users/api-token-auth/", data);
  } catch (error) {
    return error;
  }
};

const logout = async () => {
  try {
    return await ax.get("account/logout/");
  } catch (error) {
    return error;
  }
};

const updateProfile = async (data) => {
  try {
    return await ax.patch("account/auth/profile/", data);
  } catch (error) {
    return error;
  }
};

const getUserProfile = async () => {
  try {
    const res = await ax.get("account/auth/profile/");

    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return {};
  }
};

const changePassword = async (data) => {
  try {
    return await ax.patch("account/auth/change-password/", data);
  } catch (error) {
    return error;
  }
};

const passwordResetRequest = async (data) => {
  try {
    return await ax.post("password_reset/", data);
  } catch (error) {
    return error;
  }
};
const passwordResetConfirm = async (data) => {
  try {
    return await ax.post("password_reset/confirm/", data);
  } catch (error) {
    return error;
  }
};

const getUserPhoneNumbers = async () => {
  try {
    const res = await ax.get("account/phone_numbers/");

    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return [];
  }
};

export default {
  register,
  login,
  login2,
  logout,
  updateProfile,
  changePassword,
  passwordResetRequest,
  passwordResetConfirm,
  getUserProfile,
  getUserPhoneNumbers,
};
