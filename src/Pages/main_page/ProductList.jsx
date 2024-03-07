import React, { useContext } from 'react'
import { customHook2 } from '../../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'
import Sorting from './sorting'

const ProductList = () => {

  const {filter_products,grid_view}=customHook2()

  if(grid_view===true){
    return(
 
      <div className='w-3/4 p-1'>
        <Sorting/>
        <category_filter/>
        <GridView products={filter_products} />
      </div>
     
    )
  }

  if(grid_view===false){
    return(
      <div>
        <Sorting/>
        <category_filter/>
        <ListView products={filter_products}/>
      </div>
    )
  }
  
}

export default ProductList



