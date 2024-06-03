import React, { useContext } from "react";
import { useState } from "react";
import bin from "./pics/bin.png";
import Button from "@mui/material/Button";
import { addQuiz } from "../src/features/quiz/QuizSetterSlice";
import { useDispatch } from "react-redux";
import AddAnswers from "./AddAnswers";
import { GlobalContext } from "./GlobalProvider";


const ToggleButton = ({ state, optionArr }) => {
  const [isRequired, setIsRequired] = useState(false);
  const dispatch = useDispatch();
  const { setQuesComponent } = useContext(GlobalContext);

  const [on, setOnState] = useState(false);
  const toggle = () => {
    if (!on) {
      setIsRequired((bool) => !bool);
    }
    setOnState((o) => !o);
  };

  const clearOptions = () => {};
  const disabledCheck = () => {
    if (optionArr.length === 0 && state.option !== "singleTextArea")
      return true;
    return false;
  };

  return (
    <>
      <div id="toggleMenu">
        <p>Required</p>
        <button
          type="button"
          id="toggleButton"
          className={isRequired ? "on" : "off"}
          onClick={toggle}
        >
          <span className="pin" />
        </button>
        <input id="toggleInput" value="This field is required" disabled />
        <div id="delButton">
          <button type="button" onClick={clearOptions}>
            <img src={bin} alt="deleteBin" />
          </button>
        </div>
      </div>
      {state.option !== "singleTextArea" && (
        <AddAnswers {...{  optionArr,  isRequired, state }} />
      )}
      {state.option === "singleTextArea" && (
        <Button
          disabled={disabledCheck()}
          onClick={() => {
            dispatch(
              addQuiz({
                question: state.ques,
                responseType: state.option,
                options: optionArr,
                isRequired: isRequired,
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
      )}
    </>
  );
};

export default ToggleButton;
