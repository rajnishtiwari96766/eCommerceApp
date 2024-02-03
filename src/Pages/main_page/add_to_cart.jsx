import { color } from "framer-motion";
import React, { useState } from "react";

const Add_to_cart = ({ product }) => {
  const { id, colors, stock } = product;
  const [colour, setColour] = useState(colors[0]);
  return (
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
  );
};

export default Add_to_cart;
