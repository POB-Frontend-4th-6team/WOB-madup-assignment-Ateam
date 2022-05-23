import { configureStore } from '@reduxjs/toolkit'
import sidebar from './sidebar'

export const store = configureStore({
  reducer: {
    sidebar,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
