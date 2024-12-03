import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
}) 

// steps
// create Store
// wrap app component under provider
//create slice
//register reducer in store