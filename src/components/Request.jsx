import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import '../styles/request.css';

const Request = () => {
  const requests = [
    { hall: 'C1', slot: 20, date: '31/10/2024' },
    { hall: 'C1', slot: 20, date: '31/10/2024' },
    { hall: 'C1', slot: 20, date: '31/10/2024' },
  ];

  return (
    <div className="container">
      <div className="requestsBox">
        <h2 className="title">REQUESTS</h2>
        <div className="requestsList">
          {requests.map((request, index) => (
            <div key={index} className="requestCard">
              <div className="logoContainer">
                <img src="logo.png" alt="Logo" className="logoImage" />
              </div>
              <div className="requestInfo">
                <span>Hall: {request.hall}</span>
                <span>Slot: {request.slot}</span>
                <span>Date: {request.date}</span>
              </div>
              <div className="icons">
                <FaCheckCircle color="green" size={24} />
                <FaTimesCircle color="red" size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Request;
