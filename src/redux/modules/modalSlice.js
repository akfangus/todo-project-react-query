import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  data: {
    title: "",
    content: "",
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.toggle = true;
      state.data = action.payload;
    },
    closeModal: (state) => {
      state.toggle = false;
      state.data = {
        title: "",
        content: "",
      };
    },
  },
});

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
