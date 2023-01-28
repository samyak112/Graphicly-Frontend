import { createSlice } from '@reduxjs/toolkit'

export const selected_tool = createSlice({
  name: 'tool',
  initialState: {
    value: 'default',
  },
  reducers: {
    new_tool: (state,action) => {
      state.value = action.payload
    },
  },
})



// Action creators are generated for each case reducer function
export const {new_tool} = selected_tool.actions


export default selected_tool.reducer