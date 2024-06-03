import React from "react";
import { Paper, Typography } from "@mui/material";
import arrow from "../pics/app-1646214_1280.png";
import DropBoxOptionRendering from "./DropBoxOptionRendering";
import TextAreaOptionRendering from "./TextAreaOptionRendering";
import RadioButtonRendering from "./RadioButtonRendering";
import "../Styles.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const QuestionHeadRendering = ({ id, title, index }) => {
  const { listeners, attributes, transform, transition, setNodeRef } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    paddingTop: "0px",
    cursor: "default",

    display: "block",
  };

  return (
    <Paper ref={setNodeRef} style={style} elevation={15} id="paperStyle">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div {...listeners} {...attributes} id="dragBar">
          <div style={{ height: "10px", fontSize: "35px", color: "grey" }}>
            ...
          </div>
          <div style={{ color: "grey", fontSize: "35px" }}>...</div>
        </div>
      </div>
      <div style={{ display: "flex", padding: "0px 10px" }}>
        <div id="quesNo">
          <div> Q.{index + 1 + " "}</div>
          <img src={arrow} id="arrowImg" alt="arrow" />
        </div>
        <div style={{ marginLeft: "1%"}}>
          <div>
            <Typography style={{ color: "black" }} id="renderTypography">
              {title.question}
            </Typography>
          </div>

          {title.responseType === "checkBox" ? (
            <DropBoxOptionRendering
              responseType={title.responseType}
              options={title.options}
              isRequired={title.isRequired}
              dBIndex={index}
            />
          ) : (
            ""
          )}

          {title.responseType === "radioOption" ? (
            <RadioButtonRendering
              responseType={title.responseType}
              options={title.options}
              isRequired={title.isRequired}
              dBIndex={index}
            />
          ) : (
            ""
          )}

          {title.responseType === "singleTextArea" ? (
            <TextAreaOptionRendering
              responseType={title.responseType}
              options={title.options}
              isRequired={title.isRequired}
              dBIndex={index}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </Paper>
  );
};

export default QuestionHeadRendering;
