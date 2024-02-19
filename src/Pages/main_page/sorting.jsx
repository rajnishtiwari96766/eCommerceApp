import React from 'react'
import { customHook2 } from '../../context/filter_context'

const Sorting = () => {
    const{gridView,listView}=customHook2()
  return (
    <div className=''>
        <button className='p-2' onClick={gridView}><i class="fa-solid fa-grip"></i></button>

        <button onClick={listView}><i class="fa-solid fa-list"></i></button>
    </div>
  )
}

export default Sorting