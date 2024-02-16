import React from "react";
import Product from "./Product";
import Currency from "../../helper/Currency";
import { NavLink } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <div>
      {products.map((currEle) => {
        const { id, name, price, description, image } = currEle;
        return (
          <div className="p-2">
            <div className="flex  w-3/4 shadow-lg">
              <div className="w-1/3">
                <figure className="">
                  <img src={image} alt="Loading..." className="w-" />
                </figure>
              </div>

              <div className="pl-5">
                <div>{name}</div>

                <div>
                  <Currency price={price} />
                </div>

                <div className="">{description.slice(0, 120)}...</div>

                <NavLink to={`/Single_prod/${id}`}>
                  <button className="bg-slate-300 p-1 rounded-md">
                    Read More
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
