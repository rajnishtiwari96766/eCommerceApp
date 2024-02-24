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
      return {
        ...state,
        sort_value: action.payload,
      };

    case "sort_data":
      let newSortedData;
      const { filter_products } = state;
      let tempSortedData = [...filter_products];

      const compare_data = (a, b) => {
        if (state.sort_value === "lowest") {
          return a.price - b.price;
        }

        if (state.sort_value === "highest") {
          return b.price - a.price;
        }

        if (state.sort_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (state.sort_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      newSortedData = tempSortedData.sort(compare_data);

      return {
        ...state,
        filter_products: newSortedData,
      };

    default:
      return state;
  }
};

export default filter_reducer;
