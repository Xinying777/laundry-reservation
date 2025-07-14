import React, { useState } from 'react';

const ReservationModal = ({ isOpen, onClose, selectedMachine, selectedTime, onSubmit }) => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: selectedTime || '',
    studentId: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date || !formData.time || !formData.studentId) {
      alert('Please fill in all fields');
      return;
    }
    onSubmit(formData);
    setFormData({ date: new Date().toISOString().split('T')[0], time: '', studentId: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Reserve Washer-Dryer</h2>
          <button 
            onClick={onClose}
            className="modal-close"
          >
            ×
          </button>
        </div>
        
        <div className="modal-body">
          <div className="form-group">
            <label className="form-label">Machine</label>
            <input 
              type="text" 
              value={selectedMachine?.name || ''} 
              readOnly
              className="form-input form-input-readonly"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Date</label>
            <input 
              type="date" 
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Time Slot</label>
            <select 
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="form-select"
            >
              <option value="">Select a time</option>
              <option value="9:00 AM">9:00 AM - 11:00 AM</option>
              <option value="11:00 AM">11:00 AM - 1:00 PM</option>
              <option value="1:00 PM">1:00 PM - 3:00 PM</option>
              <option value="3:00 PM">3:00 PM - 5:00 PM</option>
              <option value="5:00 PM">5:00 PM - 7:00 PM</option>
              <option value="7:00 PM">7:00 PM - 9:00 PM</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Student ID</label>
            <input 
              type="text" 
              name="studentId"
              value={formData.studentId}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          
          <button 
            onClick={handleSubmit}
            className="confirm-button"
          >
            Confirm Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;