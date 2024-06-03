import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const quizTakerSlice = createSlice({
  name: "TakeQuiz",
  initialState,
  reducers: {
    initialiseState: (state, action) => {
      return [...action.payload];
    },
    addTakerAnswers: (state, action) => {
      const index = action.payload.id - 1;
      const answer = action.payload.answer;
      state[index].quizTakerAns = answer;
    },
  },
});

export const { initialiseState, addTakerAnswers } = quizTakerSlice.actions;
export default quizTakerSlice.reducer;
