import React from 'react'
import Product from './Product'
import Currency from '../../helper/Currency'

const ListView = ({products}) => {
  return (
    <div>
        {
            products.map((currEle)=>{
                const{id,name,price,description,image}=currEle
                return(
                    <div className='flex justify-around'>
                        <div>
                        <figure className='w-1/2 h-1/4'>
                            <img src={image} alt="Loading..." />
                        </figure>
                        </div>

                        <div>
                            <div>
                            {name}
                            </div>

                            <div>
                            <Currency price={price}/>
                            </div>

                            <div >
                            {description.slice(0,80)}...
                            </div>
                        </div>
                    </div>

                )
            })
        }
    </div>
  )
}

export default ListView