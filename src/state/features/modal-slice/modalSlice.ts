import { createSlice } from '@reduxjs/toolkit'
import { Modal } from '../../../interface'
const initialState = {
  isOpen: false,
} as Modal

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true
    },
    closeModal: (state) => {
      state.isOpen = false
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions
export const modalReducer = modalSlice.reducer
