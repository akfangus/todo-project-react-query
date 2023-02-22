import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") === "dark" ? true : false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    ThemeChange: (state, action) => {
      state.theme = !state.theme;
    },
  },
});

export default darkModeSlice.reducer;
export const { ThemeChange } = darkModeSlice.actions;
