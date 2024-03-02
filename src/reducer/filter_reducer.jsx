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

    case "update_filter_values":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value, //this will put the name as a value.
        },
      };

    case "filtered_products":
      let { all_products } = state;
      let temp_products = [...all_products];

      const { text } = state.filters; //this will get the text data from the text-box

      if (text) {
        temp_products = temp_products.filter((currEle) => {
          return currEle.name.toLowerCase().includes(text); //this will check the letters present in the text
        });
      }

      return {
        ...state,
        filter_products: temp_products,
      };

    default:
      return state;
  }
};

export default filter_reducer;
