import React, { useState, useEffect } from "react";
import { chart } from "../Data";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);
const UserChart = () => {
  ChartJS.defaults.font.size = 12;
  ChartJS.defaults.font.family = "Poppins";
  console.log(Chart);
  const [data, setdata] = useState(chart);
  useEffect(() => {
    setdata(chart);
  }, [chart]);

  return (
    <div className="Userchart">
      <h3 className="stats">Website Stats</h3>
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
