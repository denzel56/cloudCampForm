import { configureStore } from "@reduxjs/toolkit";
import { userFormSlice } from "./formSlice";

const store = configureStore({
  reducer: {
    userForm: userFormSlice,
  }
})
export default store;
