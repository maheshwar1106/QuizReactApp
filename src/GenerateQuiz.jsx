import React from "react";
import { Grid, Paper, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import DropBoxOptions from "./DropBoxOptions";
import TextAreaOptions from "./TextAreaOptions";
import arrow from "./pics/app-1646214_1280.png";

const GenerateQuiz = () => {
  const [state, setState] = useState({
    ques: "",
    option: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="genQuixBackGround">
      <Grid container>
        <Paper elevation={10} id="paperStyle">
          <div id="quesNoAA">
            <div>Q.No</div> <img id="arrowImg" src={arrow} alt="arrow" />
          </div>
          <form style={{width:'inherit'}}>
            <TextField
              id="standard-basic"
              label="Question"
              variant="standard"
              placeholder="Enter the question"
              name="ques"
              value={state.ques}
              onChange={handleChange}
            />

            <FormControl
              variant="standard"
              sx={{ width: "20%", marginLeft: 4,}}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Response Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Type"
                name="option"
                value={state.option}
                onChange={handleChange}
              >
                <MenuItem value="singleTextArea">Single Textbox </MenuItem>
                <MenuItem value="checkBox">Checkbox</MenuItem>
                <MenuItem value="radioOption">RadioButton</MenuItem>
              </Select>
            </FormControl>

            {state.option === "checkBox" ? (
              <DropBoxOptions {...{ state }} />
            ) : (
              ""
            )}
            {state.option === "radioOption" ? (
              <DropBoxOptions {...{ state }} />
            ) : (
              ""
            )}
            {state.option === "singleTextArea" ? (
              <TextAreaOptions {...{ state }} />
            ) : (
              ""
            )}
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default GenerateQuiz;
