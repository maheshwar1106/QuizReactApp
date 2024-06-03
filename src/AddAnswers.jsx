import React from "react";
import CheckBoxAddAnswer from "./CheckBoxAddAnswer";
import RadioButtonAddAnswer from "./RadioButtonAddAnswer";

const AddAnswers = ({ optionArr,isRequired,state}) => {
  return (
    <div>
      {state.option == "checkBox" ? (
        <CheckBoxAddAnswer {...{ optionArr, isRequired ,state}} />
      ) : (
        <RadioButtonAddAnswer {...{ optionArr, isRequired ,state}} />
      )}
    </div>
  );
};

export default AddAnswers;
