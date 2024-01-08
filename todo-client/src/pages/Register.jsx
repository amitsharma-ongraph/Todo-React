import React from "react";
import AuthCard from "../components/authCard/AuthCard";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../components/authCard/next.png"

function Register() {
  const navigate = useNavigate();
  return (
    <AuthCard>
      <h3>Register</h3>
      <form className="register form">
        <input type="text" className="text-input" placeholder="Name" />
        <input type="text" className="text-input" placeholder="Email"></input>
        <input
          type="password"
          className="text-input"
          placeholder="Password"
        ></input>
        <input
          type="password"
          className="text-input"
          placeholder="Confirm Password"
        ></input>
        <input type="submit" className="submit"></input>
      </form>
      <div className="nav-btn-cont">
        <p>Already an user ?</p>
        <button
          className="nav-btn"
          onClick={() => {
            navigate("/login");
          }}
        >
          <img src={arrowIcon} height="100%" width="100%" alt="Login"></img>
        </button>
      </div>
    </AuthCard>
  );
}

export default Register;
