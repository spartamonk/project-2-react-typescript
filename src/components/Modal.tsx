import React from 'react'
import { useAppDispatch} from '../hooks'
import { closeModal, clearCart } from '../state'

export const Modal = () => {

  const dispatch = useAppDispatch()
  return (
    <aside className='modal-container' onClick={() => dispatch(closeModal())}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <h4>remove all items from your shopping cart</h4>
        <div className='btn-container'>
          <button
            className='btn confirm-btn'
            onClick={() => {
              dispatch(clearCart())
              dispatch(closeModal())
            }}
          >
            confirm
          </button>
          <button
            className='btn clear-btn'
            onClick={() => dispatch(closeModal())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}
