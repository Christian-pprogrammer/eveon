
import React from 'react'
import Button from '../Button/Button'
import StorageContainerStyled from './StorageContainerStyled'

type ContainerProps = {
  name: string,
  measure: string,
  startPrice: string,
  price: string,
  image: string
}

const StorageContainer = ({name, startPrice, price, measure, image}: ContainerProps) => {
  return (
    <StorageContainerStyled>
      <div className="product-image" style={{backgroundImage: `url(${image})`}}>
        <span className='name'>{name}</span>
      </div>
      <div className="footer">
        <h3>{measure}</h3>
        <p>
          Starting at <b style={{textDecoration: 'line-through'}}>{startPrice}</b>
          <span style={{color: 'var(--success)'}}> {price}</span>
        </p>
        <Button title='View container' style={{display: 'block', width: '100%', padding: '10px 20px'}} />

      </div>
    </StorageContainerStyled>
  )
}

export default StorageContainer