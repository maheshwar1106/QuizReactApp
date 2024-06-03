import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import { useDispatch } from "react-redux";
import { initialiseState } from "./features/quiz/QuizTakerSLice";
import { GlobalContext } from "./GlobalProvider";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { quizSetter } = useContext(GlobalContext);

  const GenerateQuizPage = () => {
    navigate("/GenQuiz");
  };

  const TakeQuizPage = () => {
    dispatch(initialiseState(quizSetter.quiz));
    navigate("/TakeQuiz");
  };

  return (
    <div className="homeBackGround">
      <h1>Welcome to QuizMaster</h1>
      <h2>Please choose from the below</h2>
      <div className="clickButtons">
        <Button
          onClick={GenerateQuizPage}
          type="submit"
          variant="contained"
          color="success"
        >
          Generate Quiz
        </Button>
        <span> </span>
        <Button
          onClick={TakeQuizPage}
          type="submit"
          variant="contained"
          color="success"
        >
          Take Quiz
        </Button>
      </div>
    </div>
  );
};

export default Home;
