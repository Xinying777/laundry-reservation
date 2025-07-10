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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-medium">Reserve Washer-Dryer</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 text-2xl"
          >
            ×
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Machine</label>
            <input 
              type="text" 
              value={selectedMachine?.name || ''} 
              readOnly
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input 
              type="date" 
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Slot</label>
            <select 
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Student ID</label>
            <input 
              type="text" 
              name="studentId"
              value={formData.studentId}
              onChange={handleInputChange}
              // className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button 
            onClick={handleSubmit}
            // className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Confirm Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;

// ReservationModal is a pop-up reservation form component that pops up when the user taps the washing machine card.
// It contains entries for machine name, appointment date, time period, and student ID.
// Once submitted, the user's information is passed to the parent component for further processing (e.g. saving to the database or showing the reservation was successful).