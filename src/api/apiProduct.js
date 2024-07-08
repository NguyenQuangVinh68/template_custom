import axiosClient from "./axiosClient";

const apiProduct = {
  async getAll(param) {
    const url = `/product/getall?page=${param}`;
    const res = await axiosClient.get(url);
    return {
      data:res.data.data,
      pagination:{
        currentPageNumber: res.data.currentPageNumber,
        hasNextPage: res.data.hasNextPage,
        hasPreviousPage: res.data.hasPreviousPage,
        totalPages: res.data.totalPages,
        totalRecords : res.data.totalRecords,
        pageSize : res.data.pageSize
      }
    }
  },
  getById(id) {
    const url = `/product/getbyid/${id}`;
    return axiosClient.get(url);
  },

  create(data) {
    const url = "/product/create";

    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "/product/update";
    return axiosClient.put(url, data);
  },
  delete(id) {
    const url = `/product/delete/${id}`;
    return axiosClient.delete(url);
  },
  search(txtsearch){
    const url = `/product/search?textSearch=${txtsearch}`
    return axiosClient.get(url)
  }
};

export default apiProduct;
