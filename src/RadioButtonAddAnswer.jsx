import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addQuiz } from "../src/features/quiz/QuizSetterSlice";
import { GlobalContext } from "./GlobalProvider";

const RadioButtonAddAnswer = ({ optionArr, isRequired, state }) => {
  const [ans, setAns] = useState("");
  const dispatch = useDispatch();
  const { setQuesComponent } = useContext(GlobalContext);
  const disabledCheck = () => {
    if (optionArr.length === 0 && state.option !== "singleTextArea")
      return true;
    return false;
  };

  return (
    <div>
      {optionArr.length !== 0 && (
        <div id="checkBoxOptionRendering">
          {optionArr.map((value, i) => (
            <div key={i}>
              <input
                onClick={(e) => {
                  setAns(e.target.value);
                }}
                id={value.value}
                type="radio"
                name="option"
                value={value.value}
              />
              <label style={{ marginLeft: "10px" }} htmlFor={value.value}>
                {value.value}
              </label>
            </div>
          ))}
        </div>
      )}
      <Button
        disabled={disabledCheck()}
        onClick={() => {
          dispatch(
            addQuiz({
              question: state.ques,
              responseType: state.option,
              options: optionArr,
              isRequired: isRequired,
              answerArr: ans,
              quizTakerAns: "",
            })
          );
          setQuesComponent(<></>);
        }}
        sx={{ marginTop: "20px" }}
        type="button"
        variant="contained"
        color="success"
      >
        Save Question
      </Button>
    </div>
  );
};

export default RadioButtonAddAnswer;
