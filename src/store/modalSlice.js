import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModal: false
}

export const modalSlice = createSlice ({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action) => {
      // eslint-disable-next-line
      state.isModal = action.payload
    }
  }
})

export const { setModal } = modalSlice.actions;
export const isModalSelector = (state) => state.modal.isModal;

export default modalSlice.reducer;
