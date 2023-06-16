import React from 'react'
import StorageContainersStyled from './StorageContainersStyled'
import StorageContainer from '@/components/shared/StorageContainer/StorageContainer'

const StorageContainers = () => {
  return (
    <StorageContainersStyled>
      <div className="container">
        <h3>Storage containers</h3>
        <p>Prices may differ per location and are subject to change</p>
        <div className="containers">
          <StorageContainer name='Wind and watertight' startPrice='CAD 1,899' price='CAD 1,849' measure='20ft standard' image='https://601f301f4995b906c972-1983532f19862a2f086fac134d2dc81a.ssl.cf3.rackcdn.com/20ft_hapag-HEduAvw4-medium.jpg' />
          <StorageContainer name='Wind and watertight' startPrice='CAD 1,899' price='CAD 1,849' measure='20ft standard' image='https://601f301f4995b906c972-1983532f19862a2f086fac134d2dc81a.ssl.cf3.rackcdn.com/20ft_hapag-HEduAvw4-medium.jpg' />
          <StorageContainer name='Wind and watertight' startPrice='CAD 1,899' price='CAD 1,849' measure='20ft standard' image='https://601f301f4995b906c972-1983532f19862a2f086fac134d2dc81a.ssl.cf3.rackcdn.com/20ft_hapag-HEduAvw4-medium.jpg' />
        </div>
      </div>
    </StorageContainersStyled>
  )
}

export default StorageContainers