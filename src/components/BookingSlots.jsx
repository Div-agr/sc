import React from 'react';

function BookingSlots() {
  const slots = generateSlots();

  return (
    <div style={styles.container}>
      <div style={styles.bookingContainer}>
        <h2 style={styles.heading}>ROOM BOOKING</h2>
        <div style={styles.slotsContainer}>
          {slots.map((slot, index) => (
            <div key={index} style={styles.slot}>
              SLOT: {index + 1} <br />
              {slot}
            </div>
          ))}
        </div>
        <p style={styles.contactText}>
          For Weekends Contact: <a href="mailto:scient@nitt.edu" style={styles.contactLink}>scient@nitt.edu</a>
        </p>
      </div>
    </div>
  );
}

// Function to generate 30-minute slots from 9AM to 9PM
function generateSlots() {
  const slots = [];
  let startTime = new Date();
  startTime.setHours(9, 0, 0, 0); // Set initial time to 9:00 AM

  for (let i = 0; i < 24; i++) {
    const endTime = new Date(startTime.getTime() + 30 * 60000); // 30 minutes later
    slots.push(
      formatTime(startTime) + " - " + formatTime(endTime)
    );
    startTime = endTime; // Update start time to end time for next slot
  }

  return slots;
}

// Helper function to format time in HH:MM AM/PM
function formatTime(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  return hours + ":" + minutesStr + " " + ampm;
}

const styles = {
  container: {
    backgroundColor: '#1a1a1a',
    color: '#FFD700',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bookingContainer: {
    textAlign: 'center',
    marginTop: '50px',
    backgroundColor: '#333',
    padding: '30px',
    borderRadius: '10px',
    width: '100%', 
    maxWidth: '1200px',
    boxSizing: 'border-box', // Include padding and border in the width/height calculations
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  },
  heading: {
    fontSize: '1.5em',
    marginBottom: '30px',
    color: '#FFD700',
  },
  slotsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', // Auto-adjust columns
    gap: '10px',
    width: '100%',
    boxSizing: 'border-box',
  },
  slot: {
    padding: '20px',
    backgroundColor: '#222',
    color: '#FFD700',
    fontSize: '1em',
    border: '1px solid #FFD700',
    borderRadius: '8px',
    textAlign: 'center',
    cursor: 'pointer',
    boxSizing: 'border-box',
  },
  contactText: {
    marginTop: '20px',
    color: '#ccc',
  },
  contactLink: {
    color: '#FFD700',
    textDecoration: 'none',
  },
};

// Media query styles
const mediaStyles = {
  '@media (max-width: 900px)': {
    bookingContainer: {
      width: '90%',
    },
  },
  '@media (max-width: 600px)': {
    bookingContainer: {
      width: '95%',
      padding: '20px',
    },
    heading: {
      fontSize: '1.2em',
    },
    slot: {
      padding: '15px',
      fontSize: '0.9em',
    },
  },
};

// Merging media query styles dynamically
Object.assign(styles, mediaStyles);

export default BookingSlots;
