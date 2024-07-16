import axios from "axios";
import Cookies from "universal-cookie";
import { SET_IS_LOGIN, SET_USER } from "../store/constants";

const cookie = new Cookies();

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    const token = cookie.get("jwt_authentication");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    const { config, data, status } = error.response;
    if (status === 401) {
      console.log("ok");
      cookie.remove("jwt_authentication");
      window.dispatchEvent(new Event(SET_USER));
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
