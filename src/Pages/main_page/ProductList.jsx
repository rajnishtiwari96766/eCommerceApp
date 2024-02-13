import React, { useContext } from 'react'
import { customHook2 } from '../../context/filter_context'
import GridView from './GridView'

const ProductList = () => {

  const {filter_products,gridView}=customHook2()

  if(gridView){
    return(
      <div className=''>
      <div className='w-3/4 p-1'>
        <GridView products={filter_products} />
      </div>
      </div>
    )
  }
  return (
    <div>ProductList</div>
  )
}

export default ProductList