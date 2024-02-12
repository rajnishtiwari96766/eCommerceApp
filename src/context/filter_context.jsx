import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { customHook1 } from "./prod_context";
import reducer from "../reducer/filter_reducer";
const FilterContext=createContext()

const initialState={
    filter_products:[],
    all_products:[],
    grid_view:true
}

// In FilterContextProvider
export const FilterContextProvider = ({ children }) => {
    const { products } = customHook1();
    // console.log(products)
    
    const [state, dispatch] = useReducer(reducer, initialState);

    //to create gridView
    const gridView=()=>{
        dispatch({type:"gridDisplay"})
    }

    useEffect(() => {
        dispatch({ type: "Load_all_prod", payload: products });
    }, [products]);

    return (
        <FilterContext.Provider value={{ ...state,gridView}}>
            {children}
        </FilterContext.Provider>
    );
};


export const customHook2=()=>{
    return useContext(FilterContext)
}

export{FilterContext}