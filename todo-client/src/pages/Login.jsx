import React  from 'react'
import AuthCard from "../components/authCard/AuthCard"
import { useNavigate } from 'react-router-dom';
import arrowIcon from "../components/authCard/next.png"
import { useState } from "react"
import axios from 'axios';

function Login() {
  const navigate=useNavigate();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  const handleLogin=async ()=>{
    console.log(email);
    console.log(password);

    await axios.post("http://localhost:5000/api/auth/login",{email,password}).then(res=>{
      
      if(res.data.success===true){
        localStorage.setItem("todo-token",res.data.token)
        navigate("/")
      }
    }).catch(e=>{
      console.log(e);
    })
  }

  return (
    <AuthCard>
      <h3>Login</h3>
      <form className='login form' onSubmit={e=>{e.preventDefault();e.target.reset();handleLogin()}}>

          <input type='text' className='text-input' placeholder='Email' value={email} onChange={(e)=>{
            setEmail(e.target.value)
          }}></input>

          <input type='password' className='text-input' placeholder='Password' value={password} onChange={(e)=>{
            setPassword(e.target.value);
          }}></input>

          <input type='submit' className='submit'>
         </input>
      </form>
      <div className="nav-btn-cont">
        <p>New user ?</p>
        <button
          className="nav-btn"
          onClick={() => {
            navigate("/register");
          }}
        >
          <img src={arrowIcon} height="100%" width="100%" alt="Login"></img>
        </button>
      </div>
    </AuthCard>
  )
}

export default Login
