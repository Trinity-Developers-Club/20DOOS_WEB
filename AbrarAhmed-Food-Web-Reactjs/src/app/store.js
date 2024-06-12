import { configureStore } from '@reduxjs/toolkit'
import ProductsSlice from '../features/ProductsSlice'
export const store = configureStore({
  reducer: {
    ProductsSlice,
  },
})