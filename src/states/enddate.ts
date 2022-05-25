import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '.'

export interface IEndDateState {
  endDate: Date
}

const INITAL_END_DATE_STATE: IEndDateState = {
  endDate: new Date('2022, 03, 07'),
}

export const endDateSlice = createSlice({
  name: 'endDate',
  initialState: INITAL_END_DATE_STATE,
  reducers: {
    setEndDate: (state: IEndDateState, action: PayloadAction<Date>) => {
      state.endDate = action.payload
    },
  },
})

export const { setEndDate } = endDateSlice.actions

export const getEndDate = (state: RootState): Date => state.endDate.endDate

export default endDateSlice.reducer
