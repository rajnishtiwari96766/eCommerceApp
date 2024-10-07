import React, { useState } from "react";
import Cart_qty from "./cart_qty";
import { NavLink } from "react-router-dom";
import { cartHook } from "../../context/cart_context";

const Add_to_cart = ({ product }) => {
  const { id, colors, stock } = product;
  const [colour, setColour] = useState(colors[0]);
  const[amount,setAmount]=useState(1);

  // const {addItemToCart}=cartHook();
  // const handleAddToCart=({product})=>{
  //   const itemToAdd={...product};
  //   addItemToCart(itemToAdd);
  //   console.log('itemToAdd:',itemToAdd);
  // }

  const inc_qty=()=>{
    amount<stock ? setAmount(amount+1) : setAmount(stock)
  }

  const dec_qty=()=>{
    amount>1 ? setAmount(amount-1) : setAmount(1)
  }

  return (
    <div>
      <div>
      {colors.map((currColor, index) => {
        return (
          <button
            className={`m-2 p-2 rounded-lg ${colour !== currColor ? "opacity-50" : ""}`}
            style={{ backgroundColor: currColor }}
            key={index}
            onClick={() => setColour(currColor)
              }
          >

          </button>
        );
      })}
      </div>

      {/* Quantity of items in the cart */}
      <div>
        <Cart_qty
        amount={amount}
        product={product}
        inc_qty={inc_qty}
        dec_qty={dec_qty}
        />
      </div>

      {/* <NavLink to='/cart' className="px-2">
        <button className='p-2 bg-blue-500 rounded-md my-2' onClick={handleAddToCart}>Add to cart</button>
        </NavLink> */}

    </div>
  );
};

export default Add_to_cart;
