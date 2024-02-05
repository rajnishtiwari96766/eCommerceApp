import React from 'react'

const Star_review = ({stars,reviews}) => {
  const star_rating=Array.from({length:5},(element,index)=>{
    let num=index+0.5;
    return(
    <span>
        {stars >= index+1 ? <i class="fa-solid fa-star"></i> : num ? <i class="fa-solid fa-star-half-stroke"></i> : <i class="fa-regular fa-star"></i> }
      </span>
    )
  })
  return (
    <div>
      {star_rating} (Customer Reviews-{reviews})
    </div>
  )
}

export default Star_review