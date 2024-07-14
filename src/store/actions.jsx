import { SET_SHOW_SIDEBAR } from "./constants";

export const setShowSidebar = (payload) => {
  return {
    type: SET_SHOW_SIDEBAR,
    payload,
  };
};
