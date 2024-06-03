import React, { useState } from "react";
import { Grid, Paper, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addHeader } from "../features/quiz/QuizSetterSlice";
import RichTextEditor from "../component/RichEditor/RichTextEditor";
import RichTextEditorTitle from "../component/RichEditor/RichTextEditorTitle";

const HeaderDetails = () => {
  const dispatch = useDispatch();

  const [headerData, setHeaderData] = useState({
    title: "",
    companyName: "",
    totalQues: "",
    totalTime: "",
    syllabusDesc: "",
  });

  const dataSetter = (e) => {
    setHeaderData({
      ...headerData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Grid
      container
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={10}
        id="paperStyle"
        style={{
          width: "75%"
          
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RichTextEditorTitle {...{ headerData }} />
          <TextField
            style={{ width: "90%", marginBottom: "8px" }}
            value={headerData.companyName}
            onChange={dataSetter}
            id="standard-basic"
            label="Company Name"
            variant="standard"
            placeholder="Enter the company name"
            name="companyName"
          />
          <TextField
            style={{ width: "90%", marginBottom: "8px" }}
            value={headerData.totalQues}
            onChange={dataSetter}
            id="standard-basic"
            label="Total Questions"
            variant="standard"
            placeholder="Enter the total no of questions"
            name="totalQues"
          />
          <TextField
            style={{ width: "90%", marginBottom: "8px" }}
            value={headerData.totalTime}
            onChange={dataSetter}
            id="standard-basic"
            label="Total Time "
            variant="standard"
            placeholder="Enter the total time taken"
            name="totalTime"
          />{" "}
          <Typography
            sx={{
              fontSize: "26px",
              fontWeight: 700,
              fontFamily: "montserrat",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            variant="h4"
            gutterBottom
          >
            Welcome to the Syllabus
          </Typography>
          <RichTextEditor {...{ headerData }} />
          <Button
            onClick={() => {
              dispatch(addHeader(headerData));
            }}
            sx={{ marginTop: "20px" }}
            type="button"
            variant="contained"
            color="success"
          >
            Add Header Details
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
export default HeaderDetails;
