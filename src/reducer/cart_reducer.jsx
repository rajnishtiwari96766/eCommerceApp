/* eslint-disable no-case-declarations */
const reducer=(state,action)=>{
    switch(action.type){
        case 'Add_to_cart':
            const updatedCart=[...state.cart,{...action.payload}];
            console.log('updatedCart:',updatedCart);
            return{
                ...state,
                cart:updatedCart
            }

            case 'Clear_cart':
                return{
                    ...state,
                    cart:[]
                }

        case 'Remove_item':
            return{
                ...state,
                cart: state.cart.filter((_,i)=> i !== action.payload)
            };

            default:
                return state;
    }
}

export default reducer;