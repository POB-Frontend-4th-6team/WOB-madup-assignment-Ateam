import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '.'

export interface IModalState {
  modalShow: boolean
}

const INITAL_STATE: IModalState = {
  modalShow: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState: INITAL_STATE,
  reducers: {
    setModal: (state: IModalState, action: PayloadAction<boolean>) => {
      state.modalShow = action.payload
    },
  },
})
export const { setModal } = modalSlice.actions

export const getModal = (state: RootState): boolean => state.modal.modalShow

export default modalSlice.reducer
