import { useReducer } from "react";
import Context from "./Context";
import reduce, { initialState } from "./reduce";

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Provider;
