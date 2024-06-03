import React, { useState } from "react";
import RenderQuestion from "./RenderQuestion";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const itemsPerPage = 3;
const PaginationList = ({ remainingTime, initialTime }) => {
  const [checkRequired, setCheckRequired] = useState(false);
  const quizTaker = useSelector((state) => state.quizTaker);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = quizTaker.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(quizTaker.length / itemsPerPage);
  const navigate = useNavigate();

 

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const submitHandler = () => {
    let mandatoryNotAnswered = false;
    quizTaker.forEach((element) => {
      if (element.isRequired && element.quizTakerAns.length === 0) {
        mandatoryNotAnswered = true;
        return;
      }
    });

    if (mandatoryNotAnswered) setCheckRequired(true);
    else
      navigate("/ResultPage", {
        state: { sTime: initialTime, rTime: remainingTime },
      });
  };

  return (
    <div>
      <RenderQuestion
        questions={visibleItems}
        startIndex={startIndex}
        {...{ checkRequired }}
      />

      <div
        style={{
          backgroundColor: " rgb(160, 160, 160)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          color="success"
          disabled={currentPage === 1}
          onClick={prevPage}
          style={{ margin: "10px" }}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="success"
          disabled={currentPage >= totalPages}
          onClick={nextPage}
          style={{ margin: "10px" }}
        >
          Next
        </Button>
      </div>
      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
          marginBottom: "30px",
        }}
      >
        <Button
          style={{ width: "150px", height: "60px" }}
          onClick={submitHandler}
          variant="contained"
          color="success"
        >
          Submit
        </Button>
      </div>
     
    </div>
  );
};

export default PaginationList;
