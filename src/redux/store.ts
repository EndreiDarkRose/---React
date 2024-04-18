import { configureStore } from "@reduxjs/toolkit";
import answersReducer from "./slice/answersSlice";
import questionReducer from "./slice/questionsSlice";
import updateIsTimerRunning from "./slice/timerSlice";
export const store = configureStore({
  reducer: {
    answers: answersReducer,
    question: questionReducer,
    isTimerRunning: updateIsTimerRunning,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
