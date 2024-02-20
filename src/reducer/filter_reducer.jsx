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
          sort_price:filter_value
        }
    default:
      return state;
  }
};

export default filter_reducer;
