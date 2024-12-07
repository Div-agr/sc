import React, { useState } from 'react';

function BookingForm() {
  const [slot, setSlot] = useState('01');
  const [time, setTime] = useState('6 PM - 7 PM');
  const [members, setMembers] = useState('');
  const [reason, setReason] = useState('');

  const handleConfirm = () => {
    alert(`Slot: ${slot}, Time: ${time}, Members: ${members}, Reason: ${reason}`);
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.heading}>ROOM BOOKING</h2>
      <div style={styles.row}>
        <button style={styles.slotButton}>{`Slot: ${slot}`}</button>
        <button style={styles.timeButton}>{time}</button>
        <img src="/path-to-logo.png" alt="Icon" style={styles.icon} />
      </div>
      <div style={styles.row}>
        <input
          type="text"
          placeholder="Members"
          style={styles.input}
          value={members}
          onChange={(e) => setMembers(e.target.value)}
        />
      </div>
      <div style={styles.row}>
        <input
          type="text"
          placeholder="Reason"
          style={styles.input}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </div>
      <button style={styles.confirmButton} onClick={handleConfirm}>
        CONFIRM
      </button>
    </div>
  );
}

const styles = {
  formContainer: {
    backgroundColor: '#333',
    color: '#FFD700',
    padding: '30px',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '500px',
    margin: '0 auto',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  },
  heading: {
    marginBottom: '20px',
  },
  row: {
    marginBottom: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  slotButton: {
    padding: '10px 20px',
    backgroundColor: '#444',
    color: '#FFD700',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  timeButton: {
    padding: '10px 20px',
    backgroundColor: '#444',
    color: '#FFD700',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  icon: {
    height: '40px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #444',
    backgroundColor: '#222',
    color: '#FFD700',
  },
  confirmButton: {
    padding: '10px 20px',
    backgroundColor: '#FFD700',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default BookingForm;
