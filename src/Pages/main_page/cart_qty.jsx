import React from 'react'
import { NavLink } from 'react-router-dom'

const Cart_qty = ({amount,inc_qty,dec_qty}) => {
  return (
    <div >
        <button onClick={()=>dec_qty()}><i class="fa-solid fa-minus"></i></button>
        <p>{amount}</p>
        <button onClick={()=>inc_qty()}><i class="fa-solid fa-plus"></i></button>
        <NavLink to='/cart'>
        <button className='p-2 bg-slate-200'>Go to cart</button>
        </NavLink>
    </div>
  )
}

export default Cart_qty