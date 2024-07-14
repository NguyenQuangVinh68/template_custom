import { SET_SHOW_SIDEBAR } from "./constants";

const initialState = {
  showSidebar: true,
  data: [],
};

const reduce = (state, action) => {
  switch (action.type) {
    case SET_SHOW_SIDEBAR:
      return {
        ...state,
        showSidebar: action.payload,
      };
    default:
      throw new Error("Invalid action");
  }
};

export { initialState };
export default reduce;
