import React from 'react';
import TimeSlot from './time-slot-component.jsx';
// This component shows a card for each laundry machine with its details and available time slots

// - machine: object containing machine details
// - onReserve: function to call when reserve button is clicked
// - selectedSlot: currently selected time slot
// - onSlotSelect: function to handle slot selection

const MachineCard = ({ machine, onReserve, selectedSlot, onSlotSelect }) => {
  const getStatusClass = (status) => {
    return status === 'available' ? 'status-available' : 'status-in-use';
  };

  return (
    <div className="machine-card">
      {/* Card header with machine name and status */}
      <div className="machine-card-header">
        <i className="fas fa-washing-machine machine-icon"></i>
        <h3 className="machine-name">{machine.name}</h3>
         {/* Status badge changes color based on availability */}
        <span className={`machine-status ${getStatusClass(machine.status)}`}>
          {machine.status === 'available' ? 'Available' : 'In Use'}
        </span>
      </div>
      
      <div className="machine-card-body">
        <div className="machine-info">
          <p>
            <i className="fas fa-map-marker-alt"></i>
            Location: {machine.location}
          </p>
          <p>
            <i className="fas fa-clock"></i>
            Next available: {machine.nextAvailable}
          </p>
        </div>
        
        {/* Time slots availability section */}
        <div className="availability-section">
          <h5 className="availability-title">Today's Availability</h5>
           {/* Grid of available time slots */}
          <div className="time-slots-grid">
            {machine.timeSlots.map((slot, index) => (
              <TimeSlot
                key={index}
                time={slot.time}
                isAvailable={slot.available}
                isSelected={selectedSlot === `${machine.id}-${index}`}
                onClick={() => onSlotSelect(machine.id, index, slot.time)}
              />
            ))}
          </div>
        </div>
        
         {/* Reserve button - appears on all cards */}
        <button 
          onClick={() => onReserve(machine)}
          className="reserve-button"
        >
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default MachineCard;