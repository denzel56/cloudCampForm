import { configureStore } from "@reduxjs/toolkit";
// eslint-disable-next-line
import userFormSlice from "./formSlice";

const store = configureStore({
  reducer: {
    userForm: userFormSlice
  }
})
export default store;
