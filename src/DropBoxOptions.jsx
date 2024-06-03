import React from "react";
import { useState } from "react";
import RequiredAttribute from "./RequiredAttribute";
import DnDQuiz from "./DnDQuiz";

const DropBoxOptions = ({ state }) => {
  const [option, setOption] = useState("");
  const [optionArr, setOptionArr] = useState([]);

  const submitHandler = () => {
    if (option != "") {
      setOptionArr((optionArr) => [
        ...optionArr,
        { id: optionArr.length + 1, value: option },
      ]);
      setOption("");
    }
  };

  const deleteOption = (index) => {
    setOptionArr(optionArr.filter((value) => value.id !== index));
  };

  return (
    <div>
      <DnDQuiz {...{ deleteOption, optionArr, setOptionArr }} />

      <label id="radioOptionLabel" htmlFor="dropBox">
        Option
      </label>
      <input
        id="radioOptionInput"
        onChange={(e) => setOption(e.target.value)}
        value={option}
        type="text"
      />
      <button
        style={{ cursor: "pointer" }}
        id="radioAddButton"
        onClick={submitHandler}
        type="button"
      >
        +
      </button>
      <br />
      <br />

      <RequiredAttribute {...{ state, optionArr }} />
    </div>
  );
};

export default DropBoxOptions;
