import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '.'

export interface DropDownListnState {
  selected: string
}

const INITIAL_STATE: DropDownListnState = {
  selected: 'ROAS',
}

export const selctedSlice = createSlice({
  name: 'selected',
  initialState: INITIAL_STATE,
  reducers: {
    setSelected: (state: DropDownListnState, action: PayloadAction<string>) => {
      state.selected = action.payload
    },
  },
})

export const { setSelected } = selctedSlice.actions

export const getSelected = (state: RootState): string => state.selcted.selected

export default selctedSlice.reducer
