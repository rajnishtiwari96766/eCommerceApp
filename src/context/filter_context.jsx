import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { customHook1 } from "./prod_context";
import reducer from "../reducer/filter_reducer";
const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sort_price: "lowest",
};

// In FilterContextProvider
export const FilterContextProvider = ({ children }) => {
  const { products } = customHook1();
  // console.log(products)

  const [state, dispatch] = useReducer(reducer, initialState);

  //to create gridView
  const gridView = () => {
    dispatch({ type: "gridDisplay" });
  };

  const listView = () => {
    dispatch({ type: "listView" });
  };

  useEffect(() => {
    dispatch({ type: "Load_all_prod", payload: products });
  }, [products]);

  //sorting the products
  const sort = () => {
    dispatch({ type: "sort_elements", payload: products });
  };

  useEffect(() => {
    dispatch({type:"sort_data", payload:products})
  }, [state.sort_price]);

  return (
    <FilterContext.Provider value={{ ...state, gridView, listView, sort }}>
      {children}
    </FilterContext.Provider>
  );
};

export const customHook2 = () => {
  return useContext(FilterContext);
};

export { FilterContext };
