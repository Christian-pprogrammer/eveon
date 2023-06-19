import Header from '@/components/layout/header/Header'
import CustomerReviews from '@/components/pages/home/customer-reviews/CustomerReviews'
import Overview from '@/components/pages/home/overview/Overview'
import StorageContainers from '@/components/pages/home/storage-containers/StorageContainers'
import React from 'react'

const index = () => {
  return (
    <div>
      <Header />
      <Overview />
      <StorageContainers />
      <CustomerReviews />
    </div>
  )
}

export default index