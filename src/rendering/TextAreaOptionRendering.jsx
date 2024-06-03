import React from "react";
import RequiredAttributeRendering from "./RequiredAttributeRendering";

const TextAreaOptionRendering = ({ options, isRequired, dBIndex }) => {
  return (
    <div id="textArea">
      <textarea
        disabled
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Text..."
        value={options[0]}
      ></textarea>
      <br />
      <br />
      <RequiredAttributeRendering isRequired={isRequired} dBIndex={dBIndex} />
    </div>
  );
};

export default TextAreaOptionRendering;
