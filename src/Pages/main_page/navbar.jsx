import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { customHook2 } from "../../context/filter_context";

const Navbar = () => {
  const {
    filters: { text },
    update_filter,
  } = customHook2();
  const [menu, setMenu] = useState(false);

  const togglemenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="navbar ">
      <div className="bg-slate-300">
        <div className="flex space-x-10">
          <NavLink to="/">
            <h1 className="text-2xl">Gadget-Store</h1>
          </NavLink>
        </div>

        <div className="flex justify-around font-medium">
          <form onSubmit={(e) => e.preventDefault()} className="">
            <input
              type="text"
              name="text"
              value={text}
              onChange={update_filter} //update_filter is present in the filter_context api
              placeholder="Search the product"
              className="w-96 h-8 px-2 rounded-md hidden md:block" // Adjust the values as needed
            />
          </form>

          <div className="flex justify-between pe-44">
            <div className="pe-12">
              <NavLink to="/cart" className="">
                <i class="fa-solid fa-cart-shopping"></i>
              </NavLink>
            </div>
            <span className="hidden sm:block">Log in</span>
          </div>
        </div>
      </div>

      <div
        className={`${
          menu ? "flex" : "hidden"
        } flex flex-col p-2 pt-4 md:flex md:flex-row md:space-x-10 md:px-48 bg-slate-300 gap-4 text-lg font-semibold`}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/ProductList">Our Products</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/about">About us</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
