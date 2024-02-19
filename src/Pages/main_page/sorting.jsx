import React from 'react'
import { customHook2 } from '../../context/filter_context'

const Sorting = () => {
    const{gridView,listView,filter_products}=customHook2()
  return (
    <div className='flex justify-between p-2'>
        <div>
        <button className='p-2' onClick={gridView}><i class="fa-solid fa-grip"></i></button>
        <button onClick={listView}><i class="fa-solid fa-list"></i></button>
        </div>

        <div>{filter_products.length} Products Available</div>

        <div>Categorise</div>
    </div>
  )
}

export default Sorting