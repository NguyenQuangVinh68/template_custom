import axiosClient from "./axiosClient";

const apiMenu = {
  async getMenu(emp_no) {
    const url = "/menu";
    console.log(emp_no);
    const res = await axiosClient.post(url, emp_no);
    return {
      data: res.data,
    };
  },
};

export default apiMenu;
