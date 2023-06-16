import React from 'react'
import ButtonStyled from './ButtonStyled'

type BtnProps = {
  title: string,
  style?: any
}

const Button = ({title, style}: BtnProps) => {
  return (
    <ButtonStyled style={style}>
      {title}
    </ButtonStyled>
  )
}

export default Button