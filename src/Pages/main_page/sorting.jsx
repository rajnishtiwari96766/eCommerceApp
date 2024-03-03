import React from "react";
import { customHook2 } from "../../context/filter_context";

const Sorting = () => {
  const {
    gridView,
    listView,
    filter_products,
    sort,
    all_products
  } = customHook2();
  // const {filters:{text}}=customHook2()

  //to get category-wise data...
  const getUniqueData=(data,property)=>{
    let newValue=data.map((currElem)=>{
      return currElem[property]
    })

    newValue=["All",...new Set(newValue)]

    console.log(newValue);
  }
  const category_product_data=getUniqueData(all_products,"category")

  return (
    <div className="flex justify-between p-2">
      <div>
        <button className="p-2" onClick={gridView}>
          <i class="fa-solid fa-grip fa-xl"></i>
        </button>
        <button onClick={listView}>
          <i class="fa-solid fa-list fa-lg"></i>
        </button>
      </div>

     

      <div>{`${filter_products.length} Products Available`}</div>

      <div>
        <form>
          {/* <label htmlFor="filter"></label> */}
          <select name="filter" id="filter" onClick={sort}>
            <option value="lowest">Lowest-Price</option>
            <option value="highest">Highest-Price</option>
            <option value="a-z">Products A-Z</option>
            <option value="z-a">Products Z-A</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sorting;
