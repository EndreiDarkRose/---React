import { createSlice } from "@reduxjs/toolkit";

export const answersSlice = createSlice({
  name: "counter",
  initialState: {
    answers: {},
  },
  reducers: {
    updateAnswers: (state, action) => {
      state.answers = action.payload;
    },
  },
});

export const { updateAnswers } = answersSlice.actions;

export default answersSlice.reducer;
