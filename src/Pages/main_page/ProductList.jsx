import React, { useContext } from 'react'
import { customHook2 } from '../../context/all_prod'

const ProductList = () => {

  const {filter_Products}=customHook2()
  // console.log(filter_Products)
  return (
    <div>ProductList</div>
  )
}

export default ProductList