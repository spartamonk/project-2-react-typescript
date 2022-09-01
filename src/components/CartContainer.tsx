import React, { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Product } from '../interface/cartInterface'
import { CartItem } from './CartItem'
import { useAppDispatch } from '../hooks'
import { openModal } from '../state'
export const CartContainer: FC = () => {
  const dispatch = useAppDispatch()
  const { amount, total, cartItems } = useTypedSelector((store) => store.cart)

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(openModal())
  }

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((i: Product) => {
          return <CartItem key={i.id} {...i} />
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>{total.toFixed(2)}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={onClick}>
          clear cart
        </button>
      </footer>
    </section>
  )
}
