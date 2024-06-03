import React from "react";
import ToggleButton from "./ToggleButton";

const RequiredAttribute = ({ state, optionArr }) => {
  return (
    <div>
      <ToggleButton {...{ state, optionArr }} />
    </div>
  );
};

export default RequiredAttribute;
