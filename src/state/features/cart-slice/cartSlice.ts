import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { CartInterface, Product } from '../../../interface/cartInterface'
// import { cartItems } from '../../../utils'
import axios from 'axios'
const initialState = {
  amount: 0,
  total: 0,
  cartItems: [],
  isLoading: false,
} as CartInterface
const url: string = 'https://course-api.com/react-useReducer-cart-project'
export const getCartItems = createAsyncThunk(
  'cartSlice/getCartItems',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(url)
      return data
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message)
        return thunkAPI.rejectWithValue(err.message)
      }
    }
  }
)
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((i: Product) => {
        return i.id !== payload
      })
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((i: Product) => {
        return i.id === payload
      })
      if (cartItem) {
        cartItem.amount++
      }
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((i: Product) => {
        return i.id === payload
      })
      if (cartItem) {
        cartItem.amount--
      }
    },
    calculateTotal: (state) => {
      let total = 0
      let amount = 0
      state.cartItems.forEach((i: Product) => {
        amount += i.amount
        total += i.amount * Number(i.price)
      })
      state.total = total
      state.amount = amount
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getCartItems.fulfilled, (state, { payload }) => {
      state.cartItems = payload
      state.isLoading = false
    })
    builder.addCase(getCartItems.rejected, (state) => {
      state.cartItems = []
    })
  },
})
export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions
export const cartReducer = cartSlice.reducer
