import React, { createContext, useReducer } from "react";
const initialState = {
  idInData: null,
  loading: false,
  data: [],
};

const store = createContext(initialState);
const { Provider } = store;

const SET_DATA = "set_data";
const CHANGE_DATA = "change_data";
const DEL_DATA = "del_data";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    case CHANGE_DATA:
      return state.map((item) => {
        if (item.id === action.data.id) {
          return action.task;
        } else {
          return item;
        }
      });
    case DEL_DATA:
      return state.filter((item) => item.id !== action.idInData);
    default:
      throw new Error("Invalid action");
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
export { store, StateProvider };
