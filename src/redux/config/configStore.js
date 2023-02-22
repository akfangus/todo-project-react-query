import { configureStore } from "@reduxjs/toolkit";
import darkMode from "../modules/darkMode";
import modalReducer from "../modules/modalSlice";

const store = configureStore({
  reducer: {
    darkMode: darkMode,
    modal: modalReducer,
  },
});

export default store;
