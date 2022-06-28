import React from "react";
import { Doughnut } from "react-chartjs-2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux/es/exports";
const PagesChart = () => {
  const Dochart = useSelector((state) => state.DonnutChart);
  return (
    <div className="DonnutChart">
      <div
        className="flexbox"
        style={{ justifyContent: "space-between", paddingBottom: "20px" }}
      >
        <h3 st>Website stats</h3>
        <FontAwesomeIcon icon={faXmark} />
      </div>

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
