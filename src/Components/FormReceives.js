import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux/es/exports";
const FormReceives = () => {
  const data = useSelector((state) => state.FormData);
  return (
    <div className="formReceives">
      <div
        className="flexbox formheader"
        style={{ justifyContent: "space-between" }}
      >
        <h3>Form Receives</h3>
        <FontAwesomeIcon icon={faXmark} />
      </div>

      {data.map((form) => (
        <div className="formsection">
          <h4>{form.name}</h4>
          <h5 className="lowlight">{form.email}</h5>
          <p>{form.msg}</p>
        </div>
      ))}
    </div>
  );
};

export default FormReceives;
