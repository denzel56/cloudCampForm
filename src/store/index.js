import { configureStore } from "@reduxjs/toolkit";
// eslint-disable-next-line
import userFormSlice from "./formSlice";
// eslint-disable-next-line
import stepSlice from "./stepSlice";

const store = configureStore({
  reducer: {
    userForm: userFormSlice,
    step: stepSlice
  }
})
export default store;
