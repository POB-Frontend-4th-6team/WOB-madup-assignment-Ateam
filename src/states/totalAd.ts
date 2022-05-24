import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '.'

export interface ITickFormatState {
  tickFormat: string[]
}

const INITAL_STATE: ITickFormatState = {
  tickFormat: [],
}

export const tickFormatSlice = createSlice({
  name: 'tickFormat',
  initialState: INITAL_STATE,
  reducers: {
    setTickFormat: (state: ITickFormatState, action: PayloadAction<string[]>) => {
      state.tickFormat = action.payload
    },
  },
})
export const { setTickFormat } = tickFormatSlice.actions

export const getTickFormat = (state: RootState): string[] => state.totalAd.tickFormat

export default tickFormatSlice.reducer
