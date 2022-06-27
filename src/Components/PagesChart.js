import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Dochart } from "../Data";
const PagesChart = () => {
  return (
    <div className="DonnutChart">
      <h3>Website stats</h3>
      <Doughnut data={Dochart} />
      <div
        className="flexbox"
        style={{
          justifyContent: "space-evenly",
          width: "100%",
          marginTop: "40px",
        }}
      >
        <div>
          <h3 style={{ fontWeight: 500 }}>86,355</h3>
          <h6 style={{ fontWeight: 300 }}>Weekly Report</h6>
        </div>
        <div>
          <h3 style={{ fontWeight: 500 }}>8665</h3>
          <h6 style={{ fontWeight: 300 }}>Monthly Report</h6>
        </div>
      </div>
    </div>
  );
};

export default PagesChart;
