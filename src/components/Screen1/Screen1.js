import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Alert } from 'react-alert';

import './Screen1.css';

function CardSwitch() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    email:""
  });

  const navigate = useNavigate();


  const handleToggle = () => {
    
    
      setIsLogin(!isLogin);
  
    
  };

  

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    const handleRegisterChange = (event) => {
        const { name, value } = event.target;
        setRegisterData({
          ...registerData,
          [name]: value,
        });
      };
    const handleLoginSubmit = async (event) => {
      event.preventDefault();
      try {
        const requestBody = {
          email: formData.username,
          password: formData.password,
        };
        const response = await fetch("http://127.0.0.1:8080/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        const jsonData = await response.json();
        alert(jsonData.message);
        console.log(jsonData);
        if (!response.ok) {
          alert("Failed to Login");
          throw new Error("Failed to Login");
        }
        alert("Login successful!");
        console.log("Login successfully");
        navigate('/');
      } catch (error) {
        console.error("Error Logging in:", error);
      }
    };

    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        try {
          const requestBody = {
            email : registerData.email,
            username: registerData.username,
            password: registerData.password,
          };
          console.log(requestBody)
          const response = await fetch("http://127.0.0.1:8080/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          });
  
          const jsonData = await response.json();
          alert(jsonData.message);
          console.log(jsonData);
          if (!response.ok) {
            alert("Failed to register")
            throw new Error("Failed to register");
          }
          alert("Registered successfully");
          console.log("Registered successfully");
          setIsLogin(true);
        } catch (error) {
          console.error("Error Registering:", error);
        }
      };

    return (
      <div className="cardswitch">
      <label className="switch">
            <input
              type="checkbox"
              className="toggle"
              onChange={handleToggle}
              checked={isLogin}
            />
             <span className="slider"></span>
            <span className="card-side"></span>
            </label>
     
      <div className="wrapper">
            <div className="flip-card__inner">
              {isLogin ? (
                <div className="flip-card__front">
                  
                  <form
                    className="form-input"
                    action=""
                    onSubmit={handleLoginSubmit}
                  >
                  <div className="title">LOG IN</div>
                    <input
                      className="input-form"
                      name="username"
                      placeholder="Email"
                      type="email"
                      value={formData.username}
                      onChange={handleChange}
                    />
                    
                    <input
                      className="input-form"
                      name="password"
                      placeholder="Password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button className="button-confirm">Let's go!</button>
                  </form>
                </div>
              ) : (
                <div className="flip-card__back">
                  
                  <form className="form-input" action="" onSubmit={handleRegisterSubmit}>
                    <div className="title">SIGN UP</div>
                    <input
                      className="input-form"
                      placeholder="Name"
                      type="text"
                      name="username"
                      value={registerData.username}
                        onChange={handleRegisterChange}
                    />
                    <input
                      className="input-form"
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={registerData.email}
                        onChange={handleRegisterChange}
                    />
                    <input
                      className="input-form"
                      name="password"
                      placeholder="Set Password"
                      type="password"
                      value={registerData.password}
                        onChange={handleRegisterChange}
                    />
                    <button className="button-confirm" >Confirm!</button>
                  </form>
                </div>
              )}
            </div>
          {/* </label> */}
        
      </div>
      </div>
    );
  };

export default CardSwitch;
