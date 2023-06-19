import React from 'react'
import NavbarStyled from './NavbarStyled'
import Logo from '@/components/shared/logo/Logo'
import { useRouter } from 'next/router'

const Navbar = () => {

  const router = useRouter();

  return (
    <NavbarStyled>
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <div className="right-bar">
          <svg 
            style={{cursor: 'pointer'}}
            onClick={()=>router.push('/signin')}
            className="svg--icons-profile" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"></path>
          </svg>
          <svg className="svg--icons-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17"><path d="M14.1 14.8h-.2c-.5.1-1 .5-1 1.1 0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1c-.1-.5-.5-1-1-1.1zM5.9 14.8h-.2c-.5.1-1 .5-1 1.1 0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1 0-.5-.5-1-1-1.1zM15.3 2.9H3.6L3.1.6V.5C3 .2 2.7 0 2.4 0H.6C.3.1 0 .4 0 .7v.1c0 .4.4.6.7.6h1.1l.5 2.3 1.5 7c.3 1.3 1.5 2.2 2.9 2.1l6.6-.7c1.1-.1 2.1-.9 2.3-2L16.9 5v-.1c.2-1-.5-2-1.6-2zm.2 1.8l-1.3 5.2c-.1.5-.5.9-1.1.9l-6.6.7c-.6.1-1.2-.4-1.3-1L3.9 4.4h11.4c.2 0 .3.1.2.3z"></path></svg>
          <svg className="svg--icons-profile" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"></path>
          </svg>
          <svg className="svg--icons-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17"><path d="M14.1 14.8h-.2c-.5.1-1 .5-1 1.1 0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1c-.1-.5-.5-1-1-1.1zM5.9 14.8h-.2c-.5.1-1 .5-1 1.1 0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1 0-.5-.5-1-1-1.1zM15.3 2.9H3.6L3.1.6V.5C3 .2 2.7 0 2.4 0H.6C.3.1 0 .4 0 .7v.1c0 .4.4.6.7.6h1.1l.5 2.3 1.5 7c.3 1.3 1.5 2.2 2.9 2.1l6.6-.7c1.1-.1 2.1-.9 2.3-2L16.9 5v-.1c.2-1-.5-2-1.6-2zm.2 1.8l-1.3 5.2c-.1.5-.5.9-1.1.9l-6.6.7c-.6.1-1.2-.4-1.3-1L3.9 4.4h11.4c.2 0 .3.1.2.3z"></path></svg>
          
        </div>

        </div>
    </NavbarStyled>
  )
}

export default Navbar