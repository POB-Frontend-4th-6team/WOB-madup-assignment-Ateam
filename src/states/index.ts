import { configureStore } from '@reduxjs/toolkit'
import sidebar from './sidebar'
import time from './time'
import startDate from './startDate'
import endDate from './endDate'
import ad from './ad'
import modal from './modal'

export const store = configureStore({
  reducer: {
    ad,
    sidebar,
    time,
    startDate,
    endDate,
    modal,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
