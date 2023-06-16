import Header from '@/components/layout/header/Header'
import Overview from '@/components/pages/home/overview/Overview'
import StorageContainers from '@/components/pages/home/storage-containers/StorageContainers'
import React from 'react'

const index = () => {
  return (
    <div>
      <Header />
      <Overview />
      <StorageContainers />
      
    </div>
  )
}

export default index