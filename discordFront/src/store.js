import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import commonReducer from './slice/commonSlice'
const store = configureStore({
  reducer: {
    auth:authReducer,
    commonLocalStore:commonReducer
  },
})
export default store;