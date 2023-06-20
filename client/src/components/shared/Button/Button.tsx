import React from 'react'
import ButtonStyled from './ButtonStyled'

type BtnProps = {
  title: string,
  style?: any,
  onClick?: ()=>any
}

const Button = ({title, style, onClick}: BtnProps) => {
  return (
    <ButtonStyled style={style} onClick={onClick}>
      {title}
    </ButtonStyled>
  )
}

export default Button