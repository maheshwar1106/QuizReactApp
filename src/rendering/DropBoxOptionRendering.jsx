import React from "react";
import RequiredAttributeRendering from "./RequiredAttributeRendering";

const DropBoxOptionRendering = ({ options, isRequired, dBIndex }) => {
  return (
    <div id="optionRendering">
      <div id="checkBoxOptionRendering">
        {options.map((value, i) => (
          <div key={i}>
            <input value={value.value} type="checkbox" disabled />
            <span>{value.value}</span>
          </div>
        ))}
      </div>

      <br />
      <RequiredAttributeRendering isRequired={isRequired} dBIndex={dBIndex} />
    </div>
  );
};

export default DropBoxOptionRendering;
