import {
  SET_SHOW_SIDEBAR,
  SET_USER,
  SET_IS_LOGIN,
  LOGOUT,
  REQ,
} from "./constants";

const initialState = {
  showSidebar: true,
  isLogin: false,
  isLoad: false,
  userInfomation: {},
  data: [],
};

const reduce = (state, action) => {
  switch (action.type) {
    case SET_SHOW_SIDEBAR:
      return {
        ...state,
        showSidebar: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        userInfomation: action.data,
      };
    case SET_IS_LOGIN:
      return {
        ...state,
        isLogin: action.data,
      };

    case LOGOUT:
      return {
        ...state,
        isLogin: false,
      };

    case REQ:
      return {
        ...state,
        isLoad: action.isLoad,
      };
    default:
      throw new Error("Invalid action");
  }
};

export { initialState };
export default reduce;
