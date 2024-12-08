
import React, { useState } from 'react';
import "../styles/roombook.css";
import { useForm } from "@formspree/react";

const Roombook = () => {
  const [state, handleSubmit] = useForm("xblrboeo");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent form submission

    // Send login request to backend
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: username, password: password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Login failed.');
        return;
      }

      // Get token from response
      const { token } = data;

      // Store token in localStorage (or sessionStorage)
      localStorage.setItem('token', token);

      // Redirect to the appropriate dashboard based on the user role
      const decoded = JSON.parse(atob(token.split('.')[1])); // Decode JWT token
      if (decoded.isAdmin) {
        // Open admin dashboard in the same tab
        window.location.href = '/admindashboard';
      } else {
        // Open user dashboard in the same tab
        window.location.href = '/userdashboard';
      }

    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="box">
      <div className="welcome-section">
        <h1>Welcome<br />To</h1>
        <h2>SCIENt</h2>
      </div>
      <div className="login-section">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}
          <a href="#" className="forgot-password">Forgot Password?</a>
        </form>
      </div>
    </div>
  );
};

export default Roombook;
