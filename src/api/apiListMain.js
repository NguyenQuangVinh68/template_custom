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
  getById(id) {
    const url = `/products/getbyid/${id}`;
    return axiosClient.get(url);
  },

  create(data) {
    const url = "/products/create";

    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "/products/update";
    return axiosClient.put(url, data);
  },
  delete(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
  search(txtsearch) {
    const url = `/products/search?textSearch=${txtsearch}`;
    return axiosClient.get(url);
  },
};

export default apiListMain;
