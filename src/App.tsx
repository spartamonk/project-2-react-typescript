import React, { useEffect } from 'react'
import { CartContainer, Navbar, Modal } from './state'
import { calculateTotal } from './state'
import { useTypedSelector, useAppDispatch } from './hooks'
import { getCartItems } from './state'

function App() {
  const dispatch = useAppDispatch()
  const { cartItems, isLoading } = useTypedSelector((store) => store.cart)
  const { isOpen } = useTypedSelector((store) => store.modal)
  useEffect(() => {
    dispatch(getCartItems())
  }, [])
  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems, dispatch])
  if(isLoading){
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      {isOpen ? <Modal /> : null}
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
