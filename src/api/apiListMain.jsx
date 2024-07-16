import axiosClient from "./axiosClient";

const apiListMain = {
  async getAll(pgm_no) {
    let url = `/Listmain/${pgm_no}`;
    const res = await axiosClient.get(url);
    return {
      data: res.data,
    };
  },
};

export default apiListMain;
