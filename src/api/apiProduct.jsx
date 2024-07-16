import axiosClient from "./axiosClient";

const apiProduct = {
  async getAll() {
    const url = `/Menu`;
    const res = await axiosClient.get(url);
    console.log(res);
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

export default apiProduct;
