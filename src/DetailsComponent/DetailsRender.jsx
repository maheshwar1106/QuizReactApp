import React, { useContext } from "react";
import { GlobalContext } from "../GlobalProvider";
import { Grid, Paper } from "@mui/material";
import TableRender from "./TableRender";
import RichTextEditorRender from "./RichTextEditorRender";
import RichTextEditorTitleRender from "./RichTextEditorTitleRender";

const DetailsRender = () => {
  const { quizHeader } = useContext(GlobalContext);
  return (
    <div>
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
            width: "70%",
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
            <RichTextEditorTitleRender {...{ quizHeader }} />
            <br />

            {<TableRender />}

            <br />
            <br />
            <RichTextEditorRender {...{ quizHeader }} />

            <br />
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default DetailsRender;
