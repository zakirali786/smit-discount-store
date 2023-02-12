import { configureStore } from '@reduxjs/toolkit'
import { DiscountStoreSlice } from '../reducers'
export const store = configureStore(DiscountStoreSlice)