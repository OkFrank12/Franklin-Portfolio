import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const reduxState = createSlice({
  name: "themeState",
  initialState,
  reducers: {
    onThemeState: (state: any, { payload }) => {
      state.theme = payload;
    },
  },
});

export const { onThemeState } = reduxState.actions;

export default reduxState.reducer;
