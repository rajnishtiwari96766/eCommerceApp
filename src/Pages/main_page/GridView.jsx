import React from 'react'
import Product from './Product'

const GridView = ({products}) => {
    return(
    <div className='flex flex-wrap ml-1/2 pt-5'>
        {
        products.map((currEle)=>{
          return(
            <div className=''>
              <Product key={currEle.id} {...currEle}/>
              {currEle.id === "thapaserialnod" && (
                <img style={{width:"15px", height:"30px"}}/>
              )}
            </div>
          )
        })
        }
    </div>
    )
}

export default GridView