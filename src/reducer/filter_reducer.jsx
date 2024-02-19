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

    default:
      return state;
  }
};

export default filter_reducer;