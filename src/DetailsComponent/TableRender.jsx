import React, { useContext } from "react";
import { GlobalContext } from "../GlobalProvider";

const TableRender = () => {
  const { quizHeader } = useContext(GlobalContext);
  

  return (
    <div id="displayTable">
      <table>
        <thead>
          <tr id="tableHead">
            <td>{quizHeader.companyName}</td>
            <td>Information</td>
          </tr>
        </thead>
        {/* adding data to the table */}

        <tbody>
          <tr id="tableRows">
            <td>Total Question</td>
            <td>{quizHeader.totalQues}</td>
          </tr>

          <tr id="tableRows">
            <td>Total Time</td>
            <td>{quizHeader.totalTime}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableRender;
