import React from "react";
import ToggleButtonRendering from "./ToggleButtonRendering";

const RequiredAttributeRendering = ({ isRequired, dBIndex }) => {
  return <ToggleButtonRendering isRequired={isRequired} dBIndex={dBIndex} />;
};

export default RequiredAttributeRendering;
