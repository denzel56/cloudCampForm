import { configureStore } from "@reduxjs/toolkit";
// eslint-disable-next-line
import userFormSlice from "./formSlice";
// eslint-disable-next-line
import stepSlice from "./stepSlice";
// eslint-disable-next-line
import modalSlice from "./modalSlice";
import { formApi } from "../formServices/formApi";

const store = configureStore({
  reducer: {
    userForm: userFormSlice,
    step: stepSlice,
    modal: modalSlice,
    [formApi.reducerPath]: formApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(formApi.middleware)
})
export default store;
