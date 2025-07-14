import React from 'react';
import MachineCard from './machine-card-component.jsx';

const MachinesSection = ({ machines, onReserve, selectedSlot, onSlotSelect }) => {
  return (
    <div className="machines-section" id="machines">
      <h2 className="machines-title">Our Machines</h2>
      
      <div className="machines-grid">
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