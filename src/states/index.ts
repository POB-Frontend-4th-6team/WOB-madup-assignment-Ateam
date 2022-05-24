import { configureStore } from '@reduxjs/toolkit'
import sidebar from './sidebar'
import modal from './modal'

export const store = configureStore({
  reducer: {
    sidebar,
    modal,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
