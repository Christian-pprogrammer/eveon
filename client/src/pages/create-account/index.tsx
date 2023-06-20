import Header from '@/components/layout/header/Header';
import React from 'react'
import CreateAccountStyled from './CreateAccountStyled';
import Link from 'next/link';
import { useRouter } from 'next/router';

const signin = () => {

  const router = useRouter();

  const goShopping = (e: any) => {
    e.preventDefault();
    router.push('/');
  }

  return (
    <CreateAccountStyled>
      <Header />
      <div className="form-container">
        <form>
          <h3>Create My Eveon account</h3>
          <h4>Place an order</h4>
          <p>
            During the checkout process you will be prompted to create an account. After your order is confirmed you will receive an email with the link to activate your account.
          </p>
          <div className="submit">
            <input onClick={(e)=>goShopping(e)} type="button" className='submit-btn' value="Go shopping" />
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
    </CreateAccountStyled>
  )
}

export default signin;