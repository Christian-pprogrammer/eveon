import React from 'react'
import SecondNavStyled from './SecondNavStyled'
import Link from 'next/link'

type SecondNavProps = {
  active?: string
}

const SecondNav = ({active}: SecondNavProps) => {

  return (
    <SecondNavStyled>
      <div className="container">
        <div className='left-bar'>
          <ul>
            <li>
              <Link href="/containers" className={active == 'containers' ? 'active':''}>
                All containers
              </Link>
            </li>
            <li>
              <Link href="/containers">
                20ft
              </Link>
            </li>
            <li>
              <Link href="/containers">
                40ft
              </Link>
            </li>
          </ul>
        </div>
        <div className='right-bar'>
          <ul>
            <li>
              <Link href="/containers">
                About Eveon
              </Link>
            </li>
            <li>
              <Link href="/containers">
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="/containers">
                Delivery Requirements
              </Link>
            </li>
            <li>
              <Link href="/containers">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/containers">
                FAQ+
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </SecondNavStyled>
  )
}

export default SecondNav