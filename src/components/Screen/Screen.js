import React from 'react';
import './Screen.css'
import { Link } from 'react-router-dom';
const Screen = () => {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1663657473556-a8928dc06be9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const screenStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='home'>
       <h1>Talk to your Data!</h1>
       <h3>Role based interactions</h3>
       <Link className='start-btn' to='/login'>Start</Link>
    </div>
  )
}
export default Screen;
