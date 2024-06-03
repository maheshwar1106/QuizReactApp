import { Typography } from "@mui/material";
import React from "react";
import DropBoxRenderTQ from "./DropBoxRenderTQ";
import arrow from "../pics/app-1646214_1280.png";
import RadioButtonRenderTQ from "./RadioButtonRenderTQ";
import TextAreaRenderTQ from "./TextAreaRenderTQ";

const QuizQuestionRender = ({
  title,
  index,
  id,
  startIndex,
  checkRequired,
}) => {
  return (
    <div
      id="quesEnvelope"
      style={{
        display: "flex",
        backgroundColor: "white",
        padding: "20px 20px 0px 20px",
        borderBottom: "1.5px solid grey",
      }}
    >
     
        <div id="quesNoTQ" style={{display:'flex'}}>
          <div> {startIndex + index + 1 + " "}</div>
          <img src={arrow} id="arrowImg" alt="arrow" />
        </div>
     
      <div
        id="questionTQ"
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "1%",
          width:'100%'
        }}
      >
        <Typography
          id="quesTextTQ"
          style={{
            color:
              checkRequired &&
              title.isRequired &&
              title.quizTakerAns.length === 0
                ? "red"
                : "black",
          }}
        >
          {title.question}
        </Typography>

        {title.responseType === "checkBox" && (
          <DropBoxRenderTQ
            key={startIndex + index}
            options={title.options}
            dBIndex={id}
            takerAns={title.quizTakerAns}
            checkRequired={checkRequired}
            warning={
              checkRequired &&
              title.isRequired &&
              title.quizTakerAns.length === 0
            }
          />
        )}

        {title.responseType === "radioOption" && (
          <RadioButtonRenderTQ
            key={startIndex + index}
            options={title.options}
            dBIndex={id}
            takerAns={title.quizTakerAns}
            checkRequired={checkRequired}
            warning={
              checkRequired &&
              title.isRequired &&
              title.quizTakerAns.length === 0
            }
          />
        )}

        {title.responseType === "singleTextArea" && (
          <TextAreaRenderTQ
            key={startIndex + index}
            options={title.options}
            dBIndex={id}
            takerAns={title.quizTakerAns}
            checkRequired={checkRequired}
            warning={
              checkRequired &&
              title.isRequired &&
              title.quizTakerAns.length === 0
            }
          />
        )}
      </div>
    </div>
  );
};

export default QuizQuestionRender;
