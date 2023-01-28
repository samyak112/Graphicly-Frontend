import { configureStore } from '@reduxjs/toolkit'
import auth from './Auth_slice'
import current_tool from './Selected_tool'

export default configureStore({
  reducer: {
    isauthorized: auth,
    tool: current_tool
  },
})