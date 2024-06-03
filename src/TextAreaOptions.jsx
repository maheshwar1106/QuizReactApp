import React, { useState } from "react";
import RequiredAttribute from "./RequiredAttribute";

const TextAreaOptions = ({ state }) => {
  const [optionArr, setOptionArr] = useState([]);
  return (
    <div id="textArea">
      <textarea
        onChange={(e) => setOptionArr([e.target.value])}
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Text..."
        value={optionArr}
      ></textarea>
      <br />
      <br />
      <RequiredAttribute {...{ state, optionArr }} />
    </div>
  );
};

export default TextAreaOptions;
