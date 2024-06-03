import React, { useState, useEffect } from "react";
import DetailsRender from "../DetailsComponent/DetailsRender";
import PaginationList from "./PaginationList";
import { useNavigate } from "react-router-dom";

const initialTime = 15;



const TakeQuiz = () => {
  const navigate = useNavigate();
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  // useEffect(() => {
  //   const timerInterval = setInterval(() => {
  //     setTimeRemaining((prevTime) => {
  //       if (prevTime === 0) {
  //         clearTimeout(timerInterval);
  //         navigate("/ResultPage", {
  //           state: { sTime: initialTime, rTime: timeRemaining },
  //         });
  //         return 0;
  //       } else {
  //         return prevTime - 1;
  //       }
  //     });
  //   }, 1000);

  //   return () => clearInterval(timerInterval);
  // }, []);

  const hours = Math.floor(timeRemaining / 3600);
  const mins = Math.floor((timeRemaining % 3600) / 60);
  const secs = timeRemaining % 60;

  const fieldStyle = {
    width: "76%",
  };

  return (
    <div className="takeQuizBackground">
      <div style={fieldStyle}>
        <div
          style={{
            color: timeRemaining <= 10 ? "rgb(255, 83, 83)" : "#343434",
          }}
          className="timerFunction"
        >
          {" "}
          {hours} - {mins} - {secs}
        </div>
        <DetailsRender />
        <br />
        <PaginationList
          remainingTime={timeRemaining}
          initialTime={initialTime}
        />
      </div>
    </div>
  );
};

export default TakeQuiz;
