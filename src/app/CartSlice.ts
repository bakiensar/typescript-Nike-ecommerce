import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartState: false,
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState
    },
  },
})

export const { setCloseCart, setOpenCart } = CartSlice.actions
export default CartSlice.reducer
