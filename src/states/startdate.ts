import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '.'

export interface IStartDateState {
  startDate: Date
}

const INITAL_START_DATE_STATE: IStartDateState = {
  startDate: new Date('2022, 03, 01'),
}

export const startDateSlice = createSlice({
  name: 'startDate',
  initialState: INITAL_START_DATE_STATE,
  reducers: {
    setStartDate: (state: IStartDateState, action: PayloadAction<Date>) => {
      state.startDate = action.payload
    },
  },
})

export const { setStartDate } = startDateSlice.actions

export const getStartDate = (state: RootState): Date => state.startDate.startDate

export default startDateSlice.reducer
