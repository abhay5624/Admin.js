import React, { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
ChartJS.register(...registerables);
const UserChart = () => {
  const data = useSelector((state) => state.LineChart);
  ChartJS.defaults.font.size = 12;
  ChartJS.defaults.font.family = "Poppins";
  return (
    <div className="Userchart">
      <h3 className="stats">
        <div
          className="flexbox"
          style={{ justifyContent: "space-between", paddingBottom: "20px" }}
        >
          <h3 st>Website stats</h3>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </h3>
      <div className="chart">
        <Line
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              filler: {
                propagate: true,
              },
            },
            bezierCurve: true,
          }}
        />
      </div>
      <div className="flexbox reports">
        <div>
          <h3 style={{ fontWeight: 500 }}>86,355</h3>
          <h6 style={{ fontWeight: 300 }}>Weekly Report</h6>
        </div>
        <div>
          <h3 style={{ fontWeight: 500 }}>8665</h3>
          <h6 style={{ fontWeight: 300 }}>Monthly Report</h6>
        </div>
        <div>
          <h3 style={{ fontWeight: 500 }}>94,355</h3>
          <h6 style={{ fontWeight: 300 }}>Yearly Report</h6>
        </div>
      </div>
    </div>
  );
};

export default UserChart;
