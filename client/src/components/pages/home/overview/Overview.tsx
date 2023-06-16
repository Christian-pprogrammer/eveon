import React from 'react'
import OverviewStyled from './OverviewStyled'
import Button from '@/components/shared/Button/Button'
import ListItem from '@/components/shared/list-item/ListItem'

const Overview = () => {
  return (
    <OverviewStyled>
      <div className="container">
        <div className='overview-text'>
          <h2>
            Buy A Used Container Online - Fast & Easy
          </h2>
          <div>
            <p className='intro-body'>
            Eveon's convenient online webshop provides 24/7 purchasing options, transparent pricing & fast delivery on used containers. To get started, just pick your size, enter your postal code & instantly see your price.
            </p>
          </div>
          <Button title='Buy a container' />
          <div className='why-choose'>
            <h4>WHY CHOOSE EVEON CONTAINERS</h4>
            <ListItem number={1} text='Guaranted stock with delivery dates customization' />
            <ListItem number={2} text='Competitive & transparent pricing' />
            <ListItem number={3} text='U.S & Canadian based customer service team & truckers' />
          </div>
        </div>
        <div className='overview-img'>
          
        </div>
      </div>
    </OverviewStyled>
  )
}

export default Overview