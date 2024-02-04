import React from 'react'

const Cart_qty = ({amount,inc_qty,dec_qty}) => {
  return (
    <div>
        <button onClick={()=>dec_qty()}><i class="fa-solid fa-minus"></i></button>
        <p>{amount}</p>
        <button onClick={()=>inc_qty()}><i class="fa-solid fa-plus"></i></button>
    </div>
  )
}

export default Cart_qty