import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTakerAnswers } from "../features/quiz/QuizTakerSLice";

const RadioButtonRenderTQ = ({ options, dBIndex, takerAns,warning }) => {
  const dispatch = useDispatch();
  const [data, setDate] = useState(takerAns.lenght === 0 ? "" : takerAns);


  useEffect(() => {
    dispatch(addTakerAnswers({ id: dBIndex, answer: data }));
  }, [data]);

  return (
    <div id="checkBoxOptionRendering">
      {options.map((value, i) => (
        <div key={i}>
          <input
            onClick={(e) => setDate(e.target.value)}
            name="option"
            value={value.value}
            type="radio"
            defaultChecked={takerAns.includes(value.value)}
          />
          <span>{value.value}</span>
        </div>
      ))}
      <br />
      {warning && (
        <div
          style={{
            fontFamily: "sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            fontStyle: "normal",
            fontStretch: "expanded",
            color: "red",
          }}
        >
          * It is a Mandatory Question
        </div>
      )}
    </div>
  );
};

export default RadioButtonRenderTQ;
