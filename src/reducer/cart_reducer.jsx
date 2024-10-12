const reducer=(state,action)=>{
    switch(action.type){
        case 'Add_to_cart':
            const updatedCart=[...state.cart,{...action.payload}];
            console.log(updatedCart);
            return{
                ...state,
                cart:updatedCart
            }

            default:
                return state;
    }
}

export default reducer;