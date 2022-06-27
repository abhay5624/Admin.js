import React from "react";

import { Line } from "react-chartjs-2";
const UserChart = () => {
  var chart = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  console.log(chart);
  return (
    <div>
      <h4>Website Stats</h4>
      <Line data={chart} />
    </div>
  );
};

export default UserChart;
