import { createContext, useContext, useReducer, useState } from "react";
import { customHook1 } from "./prod_context";
import filter_reducer from "../reducer/filter_reducer";

const FilterContext=createContext()

const initialstate={
    filter_products:[],
    all_products:[]
}

export const FilterContextProvider=({children})=>{

    const {products}=customHook1()
    console.log(products)

    const [state,dispatch]=useReducer(filter_reducer,initialstate)

    useState(()=>{
        dispatch({
            type:"Load_all_prod", payload:products
        })
    },[])

    return(
        <FilterContext.Provider value={{...state}}>
            {children}
        </FilterContext.Provider>
    )
}

export const customHook2=()=>{
    return useContext(FilterContext)
}