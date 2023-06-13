import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 'one'
}

export const stepSlice = createSlice ({
  name: 'step',
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      // eslint-disable-next-line
      state.currentStep = action.payload
    }
  }
})

export const { setCurrentStep } = stepSlice.actions;
export const currentStepSelector = (state) => state.step.currentStep;

export default stepSlice.reducer;
