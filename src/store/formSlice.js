import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userFormData: null
}

export const userFormSlice = createSlice ({
  name: 'userForm',
  initialState,
  reducers: {
    setUserFormData: (state, action) => {
      // eslint-disable-next-line
      state.userFormData = {
        ...state.userFormData,
        ...action.payload
      }
    }
  }
})

export const { setUserFormData } = userFormSlice.actions;
export const userFormDataSelector = (state) => state.userForm.userFormData;

export default userFormSlice.reducer;
