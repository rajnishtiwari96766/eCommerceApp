const all_prod_reducer=(state,action)=>{
    switch(action.type){
        case "Load_all_prod":
            return{
                ...state,
                filter_products:[...action.payload],
                all_producta:[...action.payload]
            }

    }
}