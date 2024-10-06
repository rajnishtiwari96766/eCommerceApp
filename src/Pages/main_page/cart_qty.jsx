import React from 'react'
import { NavLink } from 'react-router-dom'

const Cart_qty = ({amount,inc_qty,dec_qty}) => {
  return (
    <>
    <div className='flex space-x-5 my-2 px-2'>
        <button onClick={()=>dec_qty()}><i class="fa-solid fa-minus"></i></button>
        <p >{amount}</p>
        <button onClick={()=>inc_qty()} className='relative'><i class="fa-solid fa-plus"></i></button>
    </div>
        <NavLink to='/cart' className="px-2">
        <button className='p-2 bg-blue-500 rounded-md my-2'>Add to cart</button>
        </NavLink>
    </>
  )
}

export default Cart_qty