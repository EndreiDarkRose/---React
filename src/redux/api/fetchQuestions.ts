import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://65e7001353d564627a8d9655.mockapi.io/Questions";

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  }
);
