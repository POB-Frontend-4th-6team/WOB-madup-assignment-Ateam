import { configureStore } from '@reduxjs/toolkit'
import sidebar from './sidebar'
import time from './time'
import startdate from './startdate'
import enddate from './enddate'

export const store = configureStore({
  reducer: {
    sidebar,
    time,
    startdate,
    enddate,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
