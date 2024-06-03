import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../features/quiz/QuizSetterSlice";
import quizTaker from "../features/quiz/QuizTakerSLice"


export const store = configureStore({
  reducer: {
    quizSetter: quizReducer,
    quizTaker:quizTaker
  },
});
