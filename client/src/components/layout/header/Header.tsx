import React from 'react'
import TopBar from '../top-bar/TopBar'
import Navbar from '../navbar/Navbar'
import SecondNav from '../second-nav/SecondNav'

type HeaderProps = {
  active?: string
}

const Header = ({active}: HeaderProps) => {
  return (
    <>
      <TopBar />
      <Navbar />
      <SecondNav active={active} />
    </>
  )
}

export default Header