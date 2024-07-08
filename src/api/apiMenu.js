import axiosClient from "./axiosClient";

const apiMenu = {
  getAll() {
    const url = "/menu";
    return axiosClient.get(url);
  },
};

export default apiMenu;
