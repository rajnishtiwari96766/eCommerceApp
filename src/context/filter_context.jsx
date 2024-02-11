import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { customHook1 } from "./prod_context";
import reducer from "../reducer/filter_reducer";
const FilterContext=createContext()

const initialState={
    filter_products:[],
    all_products:[]
}

// In FilterContextProvider

export const FilterContextProvider = ({ children }) => {
    const { products } = customHook1();
    console.log(products)
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: "Load_all_prod", payload: products });
    }, [products]);

    return (
        <FilterContext.Provider value={{ ...state }}>
            {children}
        </FilterContext.Provider>
    );
};


export const customHook2=()=>{
    return useContext(FilterContext)
}

export{FilterContext}