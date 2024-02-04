import { color } from "framer-motion";
import React, { useState } from "react";
import Cart_qty from "./cart_qty";

const Add_to_cart = ({ product }) => {
  const { id, colors, stock } = product;
  const [colour, setColour] = useState(colors[0]);

  const[amount,setAmount]=useState(1)

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
            className="p-2 m-2"
            style={{ backgroundColor: currColor }}
            key={index}
            onClick={() => setColour(currColor)}
          >
            {colour === currColor ? (
              <i class="fa-sharp fa-solid fa-check"></i>
            ) : null}
          </button>
        );
      })}
      </div>

      {/* Quantity of items in the cart */}
      <div>
        <Cart_qty
        amount={amount}
        inc_qty={inc_qty}
        dec_qty={dec_qty}
        />
      </div>
    </div>
  );
};

export default Add_to_cart;
