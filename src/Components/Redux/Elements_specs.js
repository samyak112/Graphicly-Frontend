import { createSlice } from '@reduxjs/toolkit'

export const elements_specs = createSlice({
  name: 'elements_specs',
  initialState: {
    base_background_value: '#1e1e1e',
  },
  reducers: {
    new_base_background: (state,action) => {
      state.base_background_value = action.payload
    },
  },
})



// Action creators are generated for each case reducer function
export const { new_base_background} = elements_specs.actions


export default elements_specs.reducer