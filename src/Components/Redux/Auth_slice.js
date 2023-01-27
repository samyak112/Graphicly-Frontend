import { createSlice } from '@reduxjs/toolkit'

export const authslice = createSlice({
  name: 'isauthorized',
  initialState: {
    value: null,
  },
  reducers: {
    authorized: (state) => {
      state.value = true
    },
    not_authorized: (state) => {
      state.value = false
    },
    null_auth: (state) => {
      state.value = null
    },
  },
})



// Action creators are generated for each case reducer function
export const { authorized, not_authorized , null_auth} = authslice.actions


export default authslice.reducer