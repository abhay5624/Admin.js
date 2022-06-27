import React from "react";
import logo from "../favicon.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-blue">
      <div className="flexbox">
        <img className="navbar-brand" src={logo} alt="" />
        <h1>Admin.js</h1>
      </div>
      <div
        className="flexbox"
        style={{
          width: "25%",
          justifyContent: "space-evenly",
        }}
      >
        <i className="fa fa-expand"></i>
        <i className="fa fa-bell"></i>
        <i className="fa fa-gear"></i>
      </div>
    </nav>
  );
};

export default Navbar;
