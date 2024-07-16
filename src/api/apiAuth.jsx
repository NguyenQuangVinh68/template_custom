import axiosClient from "./axiosClient";

const apiAuth = {
  login(data) {
    const url = "/login";
    return axiosClient.post(url, data);
  },
};

export default apiAuth;
