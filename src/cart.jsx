import React from 'react'
import { cartHook } from './context/cart_context'
import PageNavigation from './Pages/main_page/PageNavigation';
import Img_arr from './Pages/main_page/Img_arr';

const Cart = () => {
  const { cart } = cartHook();
  return (
    <div className=''>
      <div className="h-12 p-4 text-lg bg-slate-300 ">
        <PageNavigation title='Cart' />
      </div>

      {
        cart.map((item, index) => {
          return (
            <div className='flex justify-center align-middle'>
              <div className='bg-slate-100 w-2/3 flex justify-between p-2'>
                <div className='w-80 font-medium text-lg'>{item.name}</div>
                <div>{item.price}</div>
                <div>Quantity</div>
              </div>
                <div className='cursor-pointer m-2'><i class="fa-solid fa-trash"></i></div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart