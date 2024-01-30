import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () => {

  const [menu,setMenu]=useState(false);

  const togglemenu=()=>{
    setMenu(!menu)
  }

  return (
    <div className='navbar'>

    <div className='flex items-center justify-center space-x-60 h-24 pl-4 bg-slate-300 
                    sm:space-x-40
                    md:space-x-60
                    lg:space-x-96'>
      <div className='flex space-x-10'>
      <h1 className='text-2xl'>Chaiwala</h1>
      <input
        type="text"
        placeholder='Enter the beverage'
        className='w-96 h-8 px-2 rounded-md hidden md:block' // Adjust the values as needed
      />
      </div>

      <div className='flex space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-20 font-medium'>
      <span className='hidden sm:block'>Log in</span>
      <NavLink to="/cart" className='hidden sm:block'><i class="fa-solid fa-cart-shopping"></i></NavLink>
      <button className='block md:hidden' onClick={togglemenu}>{menu ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>} </button>
      </div>
    </div>

    <div className={`${menu ? 'flex' : 'hidden'} flex flex-col p-2 pl-20 md:flex md:flex-row md:space-x-10 md:px-52 bg-slate-300 `}>
      
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/about">About us</NavLink>
      
    </div>
    </div>

  );
}

export default Navbar;
