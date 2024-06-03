import { createSlice } from "@reduxjs/toolkit";
let id = 3;

const initialState = {
  quiz: [
    {
      id: 1,
      question: "What is the name of the Prime Minister of India ?",
      responseType: "checkBox",
      options: [
        { id: 1, value: "Narendra Modi" },
        { id: 2, value: "Rahul Gandhi" },
        { id: 3, value: "Mamata Banerjee" },
        { id: 4, value: "Aravind Kejriwal" },
      ],
      isRequired: false,
      answerArr: ["Narendra Modi"],
      quizTakerAns: [],
    },
    {
      id: 2,
      question: "Where is Oddanchatram situated ?",
      responseType: "radioOption",
      options: [
        { id: 1, value: "Dindigul" },
        { id: 2, value: "Coimbatore" },
        { id: 3, value: "Salem" },
      ],
      isRequired: true,
      answerArr: "Dindigul",
      quizTakerAns: "",
    },
    {
      id: 3,
      question: "Describe yourself ?",
      responseType: "singleTextArea",
      options: [],
      isRequired: true,
      quizTakerAns: "",
    },
  ],
};

export const quizSetterSlice = createSlice({
  name: "Quiz",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      if (action.payload.responseType === "singleTextArea") {
        const quiz = {
          id: ++id,
          ...action.payload,
        };
        state.quiz.push(quiz);
      } else {
        const quiz = {
          id: state.quiz[state.quiz.length - 1].id + 1,
          ...action.payload,
        };
        state.quiz.push(quiz);
      }
    },
    removeQuiz: (state, action) => {
      state.quiz = state.quiz.filter((ele, i) => action.payload !== i);
    },
    reorderQuiz: (state, action) => {
      state.quiz = action.payload;
    },
    addHeader: (state, action) => {
      return { ...state, quizHeader: action.payload };
    },
  },
});

export const { addQuiz, removeQuiz, reorderQuiz, addHeader } =
  quizSetterSlice.actions;

export default quizSetterSlice.reducer;
