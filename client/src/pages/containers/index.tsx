import React from 'react'
import ContainersStyled from './ContainersStyled'
import Header from '@/components/layout/header/Header'
import Overview from '@/components/pages/containers/Overview/Overview'
import CustomerReviews from '@/components/pages/home/customer-reviews/CustomerReviews'

const Containers = () => {
  return (
    <ContainersStyled>
      <Header active='containers' />
      <Overview />
      <CustomerReviews />
    </ContainersStyled>
  )
}

export default Containers