import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import {CartIcon} from '../utils'
export const Navbar = () => {
  const { amount } = useTypedSelector((store) => store.cart)
  return (
    <nav>
      <div className='nav-center'>
        <h3>redux toolkit</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            <div className='total-amount'>{amount}</div>
          </div>
        </div>
      </div>
    </nav>
  )
}
