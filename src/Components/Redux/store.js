import { configureStore } from '@reduxjs/toolkit'
import auth from './Auth_slice'
import current_tool from './Selected_tool'
import Elements_specs from './Elements_specs'

export default configureStore({
  reducer: {
    isauthorized: auth,
    tool: current_tool,
    elements_specs:Elements_specs
  },
})