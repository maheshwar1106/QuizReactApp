import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  Legend,
  Tooltip,
  CategoryScale,
  
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, LinearScale, Legend, Tooltip, CategoryScale);

const PointsScored = ({ totalQues, correctAns }) => {

    

    const data = {
      labels: ["Total Marks", "Marks Scored"],
      datasets: [
        {
          label: "Marks",
          data: [`${totalQues}`,`${correctAns}`,`${totalQues + 1}`],
          backgroundColor: ["grey", " #32c888"],
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    };

    const options = {
        response: true,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
            },
            title: {
                display: true,
                text: "This is my result page",
            },
        },
    }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "800px",
        height: "400px",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px 0px 30px 0px",
      }}
    >
      <h2 style={{ margin: "30px 0px" }}>Marks Chart</h2>
      <Bar width={140} height={250} data={data} options={options} />
    </div>
  );
};

export default PointsScored;
