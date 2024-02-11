import React, { useContext } from 'react'
import { customHook2 } from '../../context/filter_context'

const ProductList = () => {

  const {filter_products}=customHook2()
  console.log(filter_products)
  return (
    <div>ProductList</div>
  )
}

export default ProductList