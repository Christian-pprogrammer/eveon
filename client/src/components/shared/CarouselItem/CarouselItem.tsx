import React from 'react'
import CarouselItemStyled from './CarouselItemStyled'
import Rating from '../rating/Rating'
import Verified from '../Verified/Verified'

type CarouselItemProps = {
  verified: boolean
}

const CarouselItem = ({verified}: CarouselItemProps) => {
  return (
    <CarouselItemStyled>
      <div className="header">
        <Rating width='50%' height='50%' />
        {
          verified && 
          <Verified />
        }
      </div>
      
      <p className="bold">
        Shabin was very helpful and...
      </p>
      <p>
        Shabin was very helpful and understanding and she made my experience great even though...
      </p>
      <span><span className="name">Kerline joseph</span>, 5 days ago</span>
    </CarouselItemStyled>
  )
}

export default CarouselItem