import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './features/cart-slice/cartSlice'
import { modalReducer } from './features'
export const store = configureStore({
  reducer: { cart: cartReducer, modal: modalReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch