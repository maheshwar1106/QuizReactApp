import React, { useContext } from "react";
import GenerateQuiz from "./GenerateQuiz";
import Button from "@mui/material/Button";
import RenderQuiz from "./rendering/RenderQuiz";
import Details from "./DetailsComponent/Details";
import DetailsRender from "./DetailsComponent/DetailsRender";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./GlobalProvider";

const CreateQuizList = ({ children }) => {
  const navigate = useNavigate();
  const { quesComponent, setQuesComponent, quizHeader } =
    useContext(GlobalContext);
  const generateQues = () => {
    setQuesComponent(<GenerateQuiz />);
  };

  return (
    <div id="quizPageBackGround">
      <div id="quizPage">
        {quizHeader === undefined ? <Details /> : <DetailsRender />}
        {<RenderQuiz />}
        {quesComponent}
        <Button
          onClick={generateQues}
          sx={{ marginTop: "20px" }}
          type="button"
          variant="contained"
          color="success"
        >
          Add New Question
        </Button>{" "}
        <br />
        <br />
        <Button
          style={{ height: "60px", marginLeft: "42%" }}
          type="button"
          variant="contained"
          color="success"
          onClick={() => {
            navigate("/");
          }}
        >
          Submit Questions
        </Button>
      </div>
    </div>
  );
};

export default CreateQuizList;
