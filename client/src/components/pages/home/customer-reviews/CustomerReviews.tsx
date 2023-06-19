import React from 'react'
import CustomerReviewsStyled from './CustomerReviewsStyled'
import TrustPilot from '@/components/shared/trust-pilot/TrustPilot'
import Rating from '@/components/shared/rating/Rating'

const CustomerReviews = () => {
  return (
    <CustomerReviewsStyled>
      <div className="container">
        <h2>What our customers say about us</h2>
        <div className='rating'>
          <TrustPilot width='50%' height='40%' textColor='#000' />
          <Rating width='70%' height='70%' />
          <span>TrustScore <b>4.7</b> | <b>496</b> reviews</span>
        </div>
      </div>
    </CustomerReviewsStyled>
  )
}

export default CustomerReviews