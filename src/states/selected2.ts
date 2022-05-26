import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '.'

export interface DropDownListnState {
  selected2: string
}

const INITIAL_STATE: DropDownListnState = {
  selected2: '매드업',
}

export const selctedSlice2 = createSlice({
  name: 'selected2',
  initialState: INITIAL_STATE,
  reducers: {
    setSelected2: (state: DropDownListnState, action: PayloadAction<string>) => {
      state.selected2 = action.payload
    },
  },
})

export const { setSelected2 } = selctedSlice2.actions

export const getSelected2 = (state: RootState): string => state.selcted2.selected2

export default selctedSlice2.reducer
