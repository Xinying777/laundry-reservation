import React from 'react';
import TimeSlot from './time-slot-component.jsx';

const MachineCard = ({ machine, onReserve, selectedSlot, onSlotSelect }) => {
  const statusColors = {
    available: "bg-green-500",
    "in-use": "bg-red-500"
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:transform hover:-translate-y-1 hover:shadow-xl h-full">
      <div className="bg-blue-600 text-white p-5 text-center relative">
        <i className="fas fa-washing-machine text-4xl mb-3"></i>
        <h3 className="text-xl font-medium">{machine.name}</h3>
        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${statusColors[machine.status]}`}>
          {machine.status === 'available' ? 'Available' : 'In Use'}
        </span>
      </div>
      
      <div className="p-5">
        <div className="space-y-3 mb-5">
          <p className="text-gray-600">
            <i className="fas fa-map-marker-alt text-blue-600 w-5 mr-2"></i>
            Location: {machine.location}
          </p>
          <p className="text-gray-600">
            <i className="fas fa-clock text-blue-600 w-5 mr-2"></i>
            Next available: {machine.nextAvailable}
          </p>
        </div>
        
        <div className="mb-5">
          <h5 className="text-gray-800 font-medium mb-3">Today's Availability</h5>
          <div className="grid grid-cols-2 gap-2">
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
        
        <button 
          onClick={() => onReserve(machine)}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default MachineCard;