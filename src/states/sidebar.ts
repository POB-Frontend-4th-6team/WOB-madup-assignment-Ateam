import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '.'

export interface ISidebarState {
  sidebarShow: boolean
}

const INITAL_STATE: ISidebarState = {
  sidebarShow: false,
}

export const sidebarDrawerSlice = createSlice({
  name: 'sidebarDrawer',
  initialState: INITAL_STATE,
  reducers: {
    setSidebar: (state: ISidebarState, action: PayloadAction<boolean>) => {
      state.sidebarShow = action.payload
    },
  },
})
export const { setSidebar } = sidebarDrawerSlice.actions

export const getSidebarDrawer = (state: RootState): boolean => state.sidebar.sidebarShow

export default sidebarDrawerSlice.reducer
