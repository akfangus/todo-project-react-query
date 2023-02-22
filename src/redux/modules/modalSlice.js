import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  data: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      console.log("come");
      state.toggle = true;
      state.data = action.payload;
    },
    closeModal: (state) => {
      state.toggle = false;
      state.data = null;
    },
  },
});

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
