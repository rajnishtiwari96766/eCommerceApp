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

    case "comp_sort":
      return {
        ...state,
        filters:{
          ...state.filters,
         company: action.payload
        }
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

      const { text, category,company,color,price } = state.filters; //this will get the text-data/category-data from the text-box

      //this is used to compare the text
      if (text) {
        temp_products = temp_products.filter((currEle) => {
          return currEle.name.toLowerCase().includes(text); //this will check the letters present in the text
        });
      }

      if(color !== 'All'){
        temp_products=temp_products.filter((currElem)=>
           currElem.colors.includes(color)
        )
      }

      //this is used to compare the category elements
      if (category !== "All") {
        temp_products = temp_products.filter((currElem) => {
          return currElem.category === category
        })
      }

      //this is used to compare the company of the elements
      if (company !=="All") {
        temp_products = temp_products.filter((currElem) => {
          return currElem.company ===company;
        })
      }

      console.log(price);
      
      if(price !== 0){
        temp_products = temp_products.filter((currElem) => {
          return currElem.price <= price;
        })
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
