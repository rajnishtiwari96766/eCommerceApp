import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cart_reducer";

const CartContext = createContext();

const initialState = {
    cart:[],
    singleItem:{}
};

const Provider = ({ children }) => {
    const [state, dispatch] =useReducer(reducer, initialState);

    const addItemToCart=()=>{
        dispatch({type:Add_to_cart,payload:item})
    }

    return (
        <CartContext.Provider value={{ ...state,addItemToCart }}>{children}</CartContext.Provider>
    )
}

const cartHook=()=>{
    return useContext(CartContext);
}

export {Provider,CartContext,cartHook}