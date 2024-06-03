import React from "react";
import { useSelector } from "react-redux";
import TotalQues from "./TotalQues";
import PointsScored from "./PointsScored";
import { useLocation } from "react-router-dom";
import TimeAssesment from "./TimeAssesment";

const QuizResult = () => {
  const location = useLocation();
  const data = location.state;
  const quizTaker = useSelector((state) => state.quizTaker);

  let correctAns = 0;
  let wrongAns = 0;
  let unanswered = 0;
  let totalQues = quizTaker.length;

  quizTaker.forEach((element) => {
    if (element.responseType == "singleTextArea") {
      if (element.quizTakerAns.length === 0) ++unanswered;
      else ++correctAns;
    } else if (element.responseType === "radioOption") {
      if (element.quizTakerAns.length === 0) ++unanswered;
      else if (element.quizTakerAns === element.answerArr) ++correctAns;
      else if (element.quizTakerAns !== element.answerArr) ++wrongAns;
    } else if (element.responseType === "checkBox") {
      if (element.quizTakerAns.length === 0) ++unanswered;
      else if (element.quizTakerAns.length !== element.answerArr.length)
        ++wrongAns;
      else if (element.quizTakerAns.length === element.answerArr.length) {
        let data = element.answerArr;
        for (let i = 0; i < element.answerArr.length; i++) {
          if (!data.includes(element.quizTakerAns[i])) {
            ++wrongAns;
            return;
          }
        }
        ++correctAns;
      }
    }
  });

  return (
    <div
      style={{
        backgroundColor: "rgb(194, 192, 192)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: "30px 0px" }}>Welcome to the Result Page</h1>
      <TotalQues
        totalQues={totalQues}
        Attended={totalQues - unanswered}
        Unattended={unanswered}
      />
      <br />
      <PointsScored totalQues={totalQues} correctAns={correctAns} />
      <br />
      <TimeAssesment tTime={data.sTime} rTime={data.rTime} />
    </div>
  );
};

export default QuizResult;
