import { createSlice } from '@reduxjs/toolkit'

export const elements_specs = createSlice({
  name: 'elements_specs',
  initialState: {
    current_element : null,
    canvas_details:null
  },
  reducers: {
    new_current_element : (state,action) => {
      state.current_element = action.payload
    },
    update_element_spec : (state,action) =>{
      let {key, value} = action.payload
      state.current_element[key] = value
    },
    new_canvas_details : (state,action) => {
      state.canvas_details = action.payload
    },
    update_canvas_details : (state,action) => {
      let {key , value} = action.payload
      state.canvas_details[key] = value
    }
  },
})



// Action creators are generated for each case reducer function
export const {new_current_element , update_element_spec , new_canvas_details ,update_canvas_details } = elements_specs.actions


export default elements_specs.reducer