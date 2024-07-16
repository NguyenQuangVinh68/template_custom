import { SET_SHOW_SIDEBAR, SET_USER, SET_IS_LOGIN, REQ } from "./constants";

export const setShowSidebar = (payload) => {
  return {
    type: SET_SHOW_SIDEBAR,
    payload,
  };
};

export const setUser = (data) => {
  return {
    type: SET_USER,
    data,
  };
};

export const setIsLogin = (data) => {
  return {
    type: SET_IS_LOGIN,
    data,
  };
};

export const isReq = (isLoad) => {
  return {
    type: REQ,
    isLoad,
  };
};
