import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='flex justify-center translate-y-12'>
    <div className='w-2/3 bg-slate-50 h-24 rounded-md overflow-auto'>
    <div className='flex justify-between'>
        <div className='p-8 py-6'>
            <p>Ready to get started?</p>
            <p>Talk to us today...</p>
        </div>

        <div className='p-8'>
            <NavLink to="/Contact">
            <button className='bg-slate-300 p-1 rounded-md'>Get started</button>
            </NavLink>
        </div>
    </div>
    </div>
    </div>

    <div className='bg-blue-300 h-64 grid grid-cols-3 p-5 px-48 pl-80'>
        <div className='w-full '>
        <div className='w-1/2 pt-10'>
        <p className='pb-5'>Chaiwala</p>
        <p className='text-left '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime eum magnam eveniet ab dolores?</p>
        </div>
        </div>

        <div className='w-full'>
        <div className='w-1/2 pt-10'>
        <p className='pb-5'>Subscribe to get latest updates</p>
        <input type="text" placeholder='Your e-mail' className='p-2 rounded-sm' />
        <div className='pt-3'>
        <input type="Submit" className='p-2 bg-blue-600 shadow-lg' />
        </div>
        </div>
        </div>

        <div className='w-full'>
        <div className='w-1/2 pt-10'>
        <p className='pb-5 hover:text-lg'>Follow us</p>
        <div className='flex justify-between pt-3' >
          <NavLink to={"https://www.instagram.com/accounts/login/"}>
        <i class="fa-brands fa-instagram fa-xl"></i>
          </NavLink>

          <NavLink to={"https://www.linkedin.com/feed/"}>
        <i class="fa-brands fa-linkedin fa-xl"></i>
          </NavLink>

          <NavLink to={"https://twitter.com/"}>
        <i class="fa-brands fa-x-twitter fa-xl"></i>
          </NavLink>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Footer