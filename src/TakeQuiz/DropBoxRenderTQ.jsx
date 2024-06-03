import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTakerAnswers } from "../features/quiz/QuizTakerSLice";

const DropBoxRenderTQ = ({ options, dBIndex, takerAns, warning }) => {
  const dispatch = useDispatch();
  const [dataArr, setDataArr] = useState(takerAns.lenght === 0 ? [] : takerAns);

  const addAnswer = (value) => {
    setDataArr((ans) => [...ans, value]);
  };

  const removeAns = (value) => {
    setDataArr(dataArr.filter((ele) => ele !== value));
  };

  useEffect(() => {
    dispatch(addTakerAnswers({ id: dBIndex, answer: dataArr }));
  }, [dataArr]);

  return (
    <div id="optionRendering">
      <div id="checkBoxOptionRendering">
        {options.map((value, i) => (
          <div key={i}>
            <input
              onClick={(event) => {
                if (event.target.checked) {
                  return addAnswer(value.value);
                } else {
                  return removeAns(value.value);
                }
              }}
              value={value.value}
              defaultChecked={takerAns.includes(value.value)}
              type="checkbox"
            />
            <span>{value.value}</span>
          </div>
        ))}
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
    </div>
  );
};

export default DropBoxRenderTQ;
