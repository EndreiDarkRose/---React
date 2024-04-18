import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    isRunning: true,
  },
  reducers: {
    updateIsTimerRunning: (state, action) => {
      state.isRunning = action.payload;
    },
  },
});

export const { updateIsTimerRunning } = timerSlice.actions;

export default timerSlice.reducer;
