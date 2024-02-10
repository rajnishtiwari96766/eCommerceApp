import { createContext, useContext, useEffect, useReducer } from "react";
// import reducer from "../reducer/prod_reducer";
import { customHook1 } from "./prod_context";
import all_prod_reducer from "../reducer/all_prod_reducer";

const FilterContext = createContext();

const initialState = {
  filter_Products: [],
  all_products: [],
}; 

export const FilterContextProvider = ({ children }) => {
  const { products } = customHook1();
  console.log(products)

  const [state, dispatch] = useReducer(all_prod_reducer, initialState);

  useEffect(() => {
    dispatch ({ type: "Load_all_prod", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export const customHook2 = () => {
  return useContext(FilterContext);
};

