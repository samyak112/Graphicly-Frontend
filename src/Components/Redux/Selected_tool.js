import { createSlice } from '@reduxjs/toolkit'

export const selected_tool = createSlice({
  name: 'tool',
  initialState: {
    value: {cursor_icon:'default' , element_type:'default'},
  },
  reducers: {
    new_tool: (state,action) => {
      let{key,value} = action.payload
      state.value[key] = value
    },
  },
})



// Action creators are generated for each case reducer function
export const {new_tool} = selected_tool.actions


export default selected_tool.reducer