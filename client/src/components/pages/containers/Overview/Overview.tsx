import React from 'react'
import OverviewStyled from './OverviewStyled'
import StorageContainer from '@/components/shared/StorageContainer/StorageContainer'

const StorageContainers = () => {
  return (
    <OverviewStyled>
      <div className="container">
        <h3>Shipping containers for sale</h3>
        <p>
        Eveon's convenient online webshop provides 24/7 purchasing options, used 20ft & 40ft shipping containers, transparent pricing & fast delivery. Our decommissioned shipping containers have reliably shipped goods across the ocean and now ready to help you with all your sustainable building, shipping and storage solutions. Eveon proudly offers three universal shipping container sizes (20ft & 40ft standard & 40ft High Cube- all ISO certified).

        To get started, just pick your size, enter your postal code and instantly see your price!
        </p>
        <div className="containers">
          <StorageContainer name='Wind and watertight' startPrice='CAD 1,899' price='CAD 1,849' measure='20ft standard' image='https://601f301f4995b906c972-1983532f19862a2f086fac134d2dc81a.ssl.cf3.rackcdn.com/20ft_hapag-HEduAvw4-medium.jpg' direction='horizontal' />
          <StorageContainer name='Wind and watertight' startPrice='CAD 1,899' price='CAD 1,849' measure='20ft standard' image='https://601f301f4995b906c972-1983532f19862a2f086fac134d2dc81a.ssl.cf3.rackcdn.com/20ft_hapag-HEduAvw4-medium.jpg' direction='horizontal' />
          <StorageContainer name='Wind and watertight' startPrice='CAD 1,899' price='CAD 1,849' measure='20ft standard' image='https://601f301f4995b906c972-1983532f19862a2f086fac134d2dc81a.ssl.cf3.rackcdn.com/20ft_hapag-HEduAvw4-medium.jpg' direction='horizontal' />
        </div>
      </div>
    </OverviewStyled>
  )
}

export default StorageContainers