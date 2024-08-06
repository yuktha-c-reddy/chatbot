import React from 'react';
import './Screen.css'
import { Link } from 'react-router-dom';
const Screen = () => {
  return (
    <div className='home'>
       <h1>MyHR!</h1>
       <h3>Role based interactions</h3>
       <Link className='start-btn' to='/login'>Start</Link>
       <div className="video-container">
          <video autoPlay muted>
            <source src="./IBM_watsonx_ai_animation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
  )
}
export default Screen;
