import React from 'react'
import ListItemStyled from './ListItemStyled'

type ListItemProps = {
  number: number,
  text: string
}

const ListItem = ({number, text}: ListItemProps) => {
  return (
    <ListItemStyled>
      <div className='number'>
        {number}
      </div>
      <p>{text}</p>
    </ListItemStyled>
  )
}

export default ListItem