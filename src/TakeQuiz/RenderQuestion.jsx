import React from "react";
import QuizQuestionRender from "./QuizQuestionRender";

const RenderQuestion = ({ questions, startIndex, checkRequired }) => {

  return (
    <div>
      {questions.map((ques, i) => (
        <QuizQuestionRender
          key={i}
          id={ques.id}
          title={ques}
          index={i}
          startIndex={startIndex}
          {...{ checkRequired }}
        />
      ))}
    </div>
  );
};

export default RenderQuestion;
