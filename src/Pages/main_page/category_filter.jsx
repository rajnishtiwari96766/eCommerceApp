import React from 'react'
import { customHook2 } from '../../context/filter_context'

const Category_filter = () => {
    const {filters:{text},all_products}=customHook2()

    const getUniqueData=(data,property)=>{
        let newValue=data.map((currElem)=>{
          return currElem[property]
        })
    
        //implementing set in an array to get a unique data
        newValue=["All",...new Set(newValue)]
        console.log(newValue);
       return newValue;
      }
      const category_product_data=getUniqueData(all_products,"category")
    
  return (
    <div>
    {/* {category_product_data.map((category,index)=>{
      return(
        // <button
        // type="button"
        // value={category}
        
        // ></button>
        )
    })} */}
    <p>{category_product_data}</p>
  </div>
  )
}

export default Category_filter