import React from 'react';
import { useNavigate } from 'react-router-dom';

function BookingDays() {
  const navigate = useNavigate();

  const handleDayClick = async (day) => {
    try {
      // Send the selected day to the backend
      const response = await fetch('/api/selected-day', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ day }),
      });

      if (!response.ok) {
        throw new Error('Failed to send day to the backend');
      }

      // Navigate to /userdashboard/halls on successful submission
    } catch (error) {
      console.error('Error sending day to backend:', error);
    }
    navigate('/userdashboard/halls');
  };

  return (
    <div className="booking-container">
      <main className="main-content">
        <div className="day-buttons">
          {['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'].map((day) => (
            <button key={day} onClick={() => handleDayClick(day)}>
              {day}
            </button>
          ))}
        </div>
        <p className="contact-text">
          For Weekends Contact: <a href="mailto:scient@nitt.edu">scient@nitt.edu</a>
        </p>
      </main>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        .booking-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #111;
          color: #fff;
          min-height: 100vh;
          padding: 20px;
        }

        .credits {
          font-size: 1.2em;
          font-weight: bold;
          color: #fff;
        }

        .credit-count {
          color: #FFD700;
        }

        .main-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-top: 40px;
          width: 100%;
        }

        .center-logo {
          width: 180px;
          margin-bottom: 30px;
        }

        .day-buttons {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin: 30px 0;
          width: 100%;
          max-width: 800px;
        }

        .day-buttons button {
          padding: 30px 0;
          font-size: 1.5em;
          font-weight: bold;
          color: #fff;
          background-color: transparent;
          border: 3px solid #FFD700;
          border-radius: 10px;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s;
        }

        .day-buttons button:hover {
          background-color: #FFD700;
          color: #111;
        }

        .contact-text {
          color: #fff;
          font-size: 1em;
          margin-top: 40px;
        }

        .contact-text a {
          color: #FFD700;
          text-decoration: none;
        }

        .contact-text a:hover {
          text-decoration: underline;
        }

        /* Custom layout for 3 buttons in the top row and 2 in the bottom */
        .day-buttons button:nth-child(4),
        .day-buttons button:nth-child(5) {
          grid-column: span 1;
        }
        
        /* Responsive adjustments */
        @media (max-width: 800px) {
          .day-buttons {
            grid-template-columns: repeat(2, 1fr);
          }

          .day-buttons button {
            padding: 20px 0;
            font-size: 1.2em;
          }
        }

        @media (max-width: 500px) {
          .day-buttons {
            grid-template-columns: 1fr;
          }
          
          .header {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default BookingDays;
