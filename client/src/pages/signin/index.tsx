import Header from '@/components/layout/header/Header';
import React from 'react'
import SigninStyled from './SigninStyled';
import Link from 'next/link';

const signin = () => {
  return (
    <SigninStyled>
      <Header />
      <div className="form-container">
        <form>
          <h3>Sign In to My Eveon</h3>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="text" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="text" />
          </div>
          <div className="submit">
            <input type="submit" className='submit-btn' />
            <div>
              <Link href="/create-account">
                <p>Forgot password?</p>
              </Link>
              <Link href="/create-account">
                <p>Not a member yet?</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </SigninStyled>
  )
}

export default signin;