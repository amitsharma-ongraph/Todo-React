import React from 'react'
import "./AuthCard.css"
import userLogo from "./user.png"
function AuthCard({children}) {
  return (
    <div className='auth-cont'>
      <div className="auth-card">
        <div className="user-logo">
            <img src={userLogo} alt="" />
        </div>
        {children}
      </div>
    </div>
  )
}

export default AuthCard
