import React from 'react';
import "../styles/roombook.css";
import { useForm, ValidationError } from "@formspree/react";

const Roombook = () => {
  const [state, handleSubmit] = useForm("xblrboeo");

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission
    window.open('/admindashboard', '_blank'); // Open /dashboard in a new tab
  };

  return (
    <div className="box">
      <div className="welcome-section">
        <h1>Welcome<br />To</h1>
        <h2>SCIENt</h2>
      </div>
      <div className="login-section">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit" onClick={handleLogin}>Login</button>
          <a href="#" className="forgot-password">Forgot Password?</a>
        </form>
      </div>
    </div>
  );
};

export default Roombook;
