import React from 'react'
import TopBarStyled from './TopBarStyled'
import Tick from '@/components/shared/tick/Tick'
import Rating from '@/components/shared/rating/Rating'
import TrustPilot from '@/components/shared/trust-pilot/TrustPilot'


const TopBar = () => {
  return (
    <TopBarStyled>
      <div className="container">
        <div className='left-wrapper'>
          <Tick />
          <p>Competitively priced containers for all your needs</p>
        </div>
        <div className='middle-wrapper'>
          <Tick />
          <p>Quality guarantee and outstanding service</p>
        </div>
        <div className='right-wrapper'>
          <h2>Excellent</h2>
          <Rating />
          <TrustPilot />
        </div>
      </div>
    </TopBarStyled>
  )
}

export default TopBar