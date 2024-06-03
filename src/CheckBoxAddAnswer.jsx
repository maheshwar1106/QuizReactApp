import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { addQuiz } from "../src/features/quiz/QuizSetterSlice";
import { useDispatch } from "react-redux";
import { GlobalContext } from "./GlobalProvider";

const CheckBoxAddAnswer = ({ optionArr, isRequired, state }) => {
  const [ansArr, setAnsArr] = useState([]);
  const dispatch = useDispatch();
  const { setQuesComponent } = useContext(GlobalContext);

  const disabledCheck = () => {
    if (optionArr.length !== 0) return false;
    return true;
  };

  const addAnswer = (value) => {
    setAnsArr((ans) => [...ans, value]);
  };

  const removeAns = (value) => {
    setAnsArr(ansArr.filter((ele) => ele !== value));
  };

  return (
    <div>
      {optionArr.length !== 0 && (
        <div id="checkBoxOptionRendering">
          {optionArr.map((value, i) => (
            <div key={i}>
              <input
                onClick={(event) => {
                  if (event.target.checked) {
                    return addAnswer(value.value);
                  }
                  return removeAns(value.value);
                }}
                value={value.value}
                type="checkbox"
              />
              <span>{value.value}</span>
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
              answerArr: ansArr,
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

export default CheckBoxAddAnswer;
