import React from "react";
import "./Navbar.css";
import logo from "./task.png"
import userIcon from "./user.png"
function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav">
        <div className="logo-cont">
          <img className="logo" src={logo} />
        </div>
        <div className="text-logo">
          <h2>Todo-App</h2>
        </div>
        <div className="user-info-btn">
          <img src={userIcon} className="user-icon"/>
        </div>
      </div>
      <div className="user-info">

      </div>
    </div>
  );
}

export default Navbar;
