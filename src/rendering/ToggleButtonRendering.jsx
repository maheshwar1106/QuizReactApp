import bin from "..//pics/bin.png";
import { removeQuiz } from "../features/quiz/QuizSetterSlice";
import { useDispatch } from "react-redux";

const ToggleButtonRendering = ({ isRequired, dBIndex }) => {
  const dispatch = useDispatch();
  const clearOptions = (dBIndex) => {
    console.log("I'm in clear options");
    dispatch(removeQuiz(dBIndex));
  };

  return (
    <div id="toggleMenu" style={{ marginBottom: "15px" }}>
      <p style={{ cursor: "default" }}>Required</p>
      <button
        type="button"
        id="toggleButton"
        className={isRequired ? "on" : "off"}
    
      >
        <span className="pin" />
      </button>
      <input id="toggleInput" value="This field is required" disabled />
      <div id="delButton">
        <button type="button" onClick={() => clearOptions(dBIndex)}>
          <img src={bin} alt="deleteBin" />
        </button>
      </div>
    </div>
  );
};

export default ToggleButtonRendering;
