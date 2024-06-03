import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateQuizList from "./CreateQuizList";
import TakeQuiz from "./TakeQuiz/TakeQuiz";
import GlobalProvider from "./GlobalProvider";
import QuizResult from "./FinalAssessment/QuizResult";

const App = () => {
  return (
    <div className="appBackGround">
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="GenQuiz" element={<CreateQuizList />}></Route>
            <Route path="TakeQuiz" element={<TakeQuiz />}></Route>
            <Route path="ResultPage" element={<QuizResult />}></Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
};

export default App;
