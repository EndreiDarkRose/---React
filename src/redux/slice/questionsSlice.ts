import { createSlice } from "@reduxjs/toolkit";
import { fetchQuestions } from "../api/fetchQuestions";

export const questionSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
  },
  reducers: {
    updateQuestion: (state, action) => {
      state.questions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
    });
  },
});

export const { updateQuestion } = questionSlice.actions;

export default questionSlice.reducer;
