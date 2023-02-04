import { createSlice } from '@reduxjs/toolkit'

export const elements_specs = createSlice({
  name: 'elements_specs',
  initialState: {
    current_element : null,
    canvas_details:null,
    save_details:false,
    canvas_reset:false
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
    },
    add_element_to_canvas : (state,action) =>{
      let value = action.payload
      state.canvas_details.canvas_elements.push(value)
    },
    save_details : (state,action)=>{
      state.save_details = action.payload
    },
    canvas_reset : (state,action)=>{
      state.canvas_reset = action.payload
    }
  },
})



// Action creators are generated for each case reducer function
export const {new_current_element , update_element_spec , new_canvas_details ,update_canvas_details,add_element_to_canvas , save_details , canvas_reset} = elements_specs.actions


export default elements_specs.reducer