import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/prod_reducer";
import { customHook1 } from "./prod_context";

const FilterContext=createContext()

const initialState={
    filter_Products:[],
    all_products:[]
}
export const FilterContextProvider=({children})=>{

    const{products}=customHook1()
    
    const [state,dispatch]=useReducer(reducer,initialState)
    useEffect(()=>{
        dispatch:({type:"Load_all_prod", payload:products})
    },[{products}])
    
    return(
        <FilterContext.Provider value={{...state}}>
            {children}
        </FilterContext.Provider>
    )
}

export const customHook2=()=>{
    return useContext(FilterContext)
}

