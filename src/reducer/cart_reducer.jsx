const reducer=(action,state)=>{
    switch(action.type){
        case 'Add_to_cart':
            return{
                ...state,
                // isLoading:true
            }

            default:
                return state;
    }
}