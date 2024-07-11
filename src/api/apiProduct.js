import axiosClient from "./axiosClient";

const apiProduct = {
  async getAll() {
    const url = `/products`;
    const res = await axiosClient.get(url);
    console.log(res);
    return {
      data: res.data,
      // pagination: {
      //   currentPageNumber: res.data.currentPageNumber,
      //   hasNextPage: res.data.hasNextPage,
      //   hasPreviousPage: res.data.hasPreviousPage,
      //   totalPages: res.data.totalPages,
      //   totalRecords: res.data.totalRecords,
      //   pageSize: res.data.pageSize,
      // },
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
    const url = `/products/delete/${id}`;
    return axiosClient.delete(url);
  },
  search(txtsearch) {
    const url = `/products/search?textSearch=${txtsearch}`;
    return axiosClient.get(url);
  },
};

export default apiProduct;
