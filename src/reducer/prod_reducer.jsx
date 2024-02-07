const reducer = (state, action) => {
  switch (action.type) {
    case "Data_Loading":
      return {
        ...state,
        isLoading: true,
      };

    case "Get_Data":
      const featureData = action.payload.filter((currEle) => {
        return currEle.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        product: action.payload,
        featureProducts: featureData,
      };

    case "Error_Occurred":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    //for single-product api call
    case "single_prod_Loading":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "single_prod_get":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "single_prod_error":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

      //all products api call
      case "all_prod_loading":
        return{
          ...state,
          isSingleLoading:true,
        };

    default:
      return state;
  }
};
export default reducer;
