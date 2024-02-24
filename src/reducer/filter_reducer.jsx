const filter_reducer = (state, action) => {
  switch (action.type) {
    case "Load_all_prod":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "gridDisplay":
      return {
        ...state,
        grid_view: true,
      };
      
    case "listView":
      return {
        ...state,
        grid_view: false,
      };

      case "sort_elements":
        let filter_option=document.getElementById("filter")
        let filter_value=filter_option.options[filter_option.selectedIndex].value;
        console.log(filter_value)
        return{
          ...state,
          sort_value:filter_value
        }

        case "sort_data":
          let newSortedData;
          let tempSortedData=[...action.payload]

          //sorted data in ascending value of price
          if(state.sort_value==="lowest"){
            const compare_price=(a,b)=>{
              return(
                a.price-b.price
              ) 
            }
            newSortedData=tempSortedData.sort(compare_price)
          }
          //sorted data in descending value of price
          if(state.sort_value === "highest"){
            const compare_price=(a,b)=>{
              return(b.price - a.price)
            }
            newSortedData=tempSortedData.sort(compare_price)
          }

          //sorting the data in a-z format
          if(state.sort_value=== "a-z"){
            
              newSortedData=tempSortedData.sort((a,b)=>{
                return(
                  // console.log("a-z clicked")
                  a.name.localeCompare(b.name)
                )
              })
          
          }

          //sorting the data in z-a format
          if(state.sort_value=== "z-a"){
            newSortedData=tempSortedData.sort((a,b)=>{
              return b.name.localeCompare(a.name)
            })
          }
        return{
          ...state,
          filter_products:newSortedData,
        }

    default:
      return state;
  }
};

export default filter_reducer;
