import React from 'react';
import MachineCard from './machine-card-component.jsx';

const MachinesSection = ({ machines, onReserve, selectedSlot, onSlotSelect }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12" id="machines">
      <h2 className="text-3xl font-medium text-center mb-12 text-gray-800">Our Machines</h2>
      
      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {machines.map((machine) => (
          <MachineCard
            key={machine.id}
            machine={machine}
            onReserve={onReserve}
            selectedSlot={selectedSlot}
            onSlotSelect={onSlotSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default MachinesSection;