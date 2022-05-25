import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '.'

export interface StatusOptionState {
  optionState: string
}

const INITIAL_STATE: StatusOptionState = {
  optionState: 'All',
}

export const statusOptionSlice = createSlice({
  name: 'statusOption',
  initialState: INITIAL_STATE,
  reducers: {
    setStatusOption: (state: StatusOptionState, action: PayloadAction<string>) => {
      state.optionState = action.payload
    },
  },
})

export const { setStatusOption } = statusOptionSlice.actions

export const getStatusOption = (state: RootState): string => state.ad.optionState

export default statusOptionSlice.reducer
