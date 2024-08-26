import React, { useContext } from 'react'
import { customHook2 } from '../../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'
import Sorting from './sorting'

const ProductList = () => {

  const {filter_products,grid_view}=customHook2()

  if(grid_view===true){
    return(
 
      <div className='flex p-1'>
        <Sorting/>
        <GridView products={filter_products} />
      </div>
     
    )
  }

  if(grid_view===false){
    return(
      <div className='flex'>
        <Sorting/>
        <ListView products={filter_products}/>
      </div>
    )
  }
  
}

export default ProductList



