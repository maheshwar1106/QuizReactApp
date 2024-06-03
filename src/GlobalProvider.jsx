import React, { createContext, useState } from "react";
import { useSelector } from "react-redux";

export const GlobalContext = createContext(null);
const GlobalProvider = ({ children }) => {
  const [quesComponent, setQuesComponent] = useState(<></>);
  const quizHeader = useSelector((state) => state.quizSetter.quizHeader);
  const quizQuestions = useSelector((state) => state.quizSetter.quiz);
  const quizSetter = useSelector((state) => state.quizSetter);

  return (
    <GlobalContext.Provider
      value={{
        quizSetter,
        quesComponent,
        setQuesComponent,
        quizHeader,
        quizQuestions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
