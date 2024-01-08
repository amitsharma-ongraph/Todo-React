import React, { useEffect } from 'react'
import "./LoadingScreen.css"
function LoadingScreen() {
    useEffect(()=>{
        document.querySelector('.loading-text').style.fontSize='2em';
    })
  return (
    <div className='loading-cont'>
      <div className="loading-card">
        <h1 className='loading-text'>Todo-App</h1>
      </div>
    </div>
  )
}

export default LoadingScreen
