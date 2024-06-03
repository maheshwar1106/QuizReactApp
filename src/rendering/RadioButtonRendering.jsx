import React from "react";
import RequiredAttributeRendering from "./RequiredAttributeRendering";

const RadioButtonRendering = ({ options, isRequired, dBIndex }) => {
  return (
    <div  >
      <div id="checkBoxOptionRendering">
        {options.map((value, i) => (
          <div key={i}>
            <input name="option" value={value.value} type="radio" disabled />
            <span>{value.value}</span>
          </div>
        ))}
      </div>

      <br />
      <RequiredAttributeRendering isRequired={isRequired} dBIndex={dBIndex} />
    </div>
  );
};

export default RadioButtonRendering;
