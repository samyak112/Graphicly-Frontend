import { configureStore } from '@reduxjs/toolkit'
import auth from './Auth_slice'

export default configureStore({
  reducer: {
    isauthorized: auth,
  },
})