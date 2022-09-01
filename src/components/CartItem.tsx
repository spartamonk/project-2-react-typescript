import React, { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Product } from '../interface/cartInterface'
import { removeItem, increase, decrease } from '../state'
import { useAppDispatch } from '../hooks'
import { ChevronDown, ChevronUp } from '../utils'
export const CartItem: FC<Product> = ({ amount, price, title, id, img }) => {
  const dispatch = useAppDispatch()
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item price'>${price}</h4>
        <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button
          className='amount-btn'
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id))
              return
            }
            dispatch(decrease(id))
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}
