import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '.'

export interface ITimeListState {
  timeList: string[]
}

const INITAL_TIME_LIST_STATE: ITimeListState = {
  timeList: [],
}

export const timeListSlice = createSlice({
  name: 'timeList',
  initialState: INITAL_TIME_LIST_STATE,
  reducers: {
    setTimeListFormat: (state: ITimeListState, action: PayloadAction<string[]>) => {
      state.timeList = action.payload
    },
  },
})

export const { setTimeListFormat } = timeListSlice.actions

export const getTimeListFormat = (state: RootState): string[] => state.time.timeList

export default timeListSlice.reducer
