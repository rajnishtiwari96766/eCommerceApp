import React from 'react'
import Product from './Product'

const GridView = ({products}) => {
    return(
    <div>
        {
        products.map((currEle)=>{
          return <Product key={currEle.id} {...currEle}/>
        })
        }
    </div>
    )
}

export default GridView