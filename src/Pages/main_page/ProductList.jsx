import React, { useContext } from 'react'
import { customHook2 } from '../../context/filter_context'
import GridView from './GridView'

const ProductList = () => {

  const {filter_products,gridView}=customHook2()
  console.log(filter_products)

  if(gridView){
    return(
      <GridView products={filter_products} />
    )
  }
  return (
    <div>ProductList</div>
  )
}

export default ProductList