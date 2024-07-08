import axios from "axios";
import Cookies from "universal-cookie";

const cookie = new Cookies()

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    const token = cookie.get("jwt_authentication")
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response
  },
  
  function (error) {
    // const { config, data, status } = error.response;
    // if (status === 400) {
    //   cookie.remove("jwt_authentication")
    //   localStorage.removeItem("user");
    // }
    return Promise.reject(error);
  }
);

export default axiosClient;
