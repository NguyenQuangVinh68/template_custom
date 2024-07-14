import axiosClient from "./axiosClient";

const apiListMain = {
  async getAll(pgm_no) {
    let url = "/products";
    if (pgm_no == 1) url = "/products";
    else url = "/carts";
    const res = await axiosClient.get(url);
    return {
      data: res.data,
    };
  },
};

export default apiListMain;
