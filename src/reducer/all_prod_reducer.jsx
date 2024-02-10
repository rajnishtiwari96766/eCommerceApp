const all_prod_reducer=(state,action)=>{
    switch(action.type){
        case "Load_all_prod":
            return{
                ...state,
                filter_products:[...action.payload],
                all_products:[...action.payload]
            }

            default: 
            return state;
    }
}
export default all_prod_reducer;