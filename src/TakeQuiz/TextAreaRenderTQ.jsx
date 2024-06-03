import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTakerAnswers } from "../features/quiz/QuizTakerSLice";

const TextAreaRenderTQ = ({ dBIndex, takerAns, warning }) => {
  const [data, setDate] = useState(takerAns.lenght === 0 ? "" : takerAns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addTakerAnswers({ id: dBIndex, answer: data }));
  }, [data]);

  return (
    <div id="textAreaTQ">
      <textarea
        onChange={(e) => {
          setDate(e.target.value);
        }}
        placeholder="Text..."
        value={data}
      ></textarea>
      {warning && (
        <div
          style={{
            fontFamily: "sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            fontStyle: "normal",
            fontStretch: "expanded",
            color: "red",
            marginTop: "10px",
          }}
        >
          * It is a Mandatory Question
        </div>
      )}
    </div>
  );
};

export default TextAreaRenderTQ;
