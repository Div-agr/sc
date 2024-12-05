import React from 'react'
import { scient } from '../assets'
import '../styles/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div class="header">
            <div class="logo">
                <img src={scient} alt="Logo" />
            </div>
                <div className="nav-links">
                    <Link to="/" className="nav-link">HOME</Link>
                    <span className="separator">|</span>
                    <Link to="/dashboard/requests" className="nav-link">REQUESTS</Link>
                    <span className="separator">|</span>
                    <Link to="/dashboard/history" className="nav-link">HISTORY</Link>
                    <span className="separator">|</span>
                    <Link to="/dashboard/profile" className="nav-link">PROFILE</Link>
                </div>
    </div>
  )
}

export default Header