import React, { useState } from 'react';
import HeroSection from './components/hero-section-component.jsx';
import MachinesSection from './components/machines-section-component.jsx';
import ReservationModal from './components/reservation-modal-component.jsx';
import Footer from './components/footer-component.jsx';
import { machinesData } from './data/machine-data.js';
import './App.css'; 

const App = () => {
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const handleViewMachines = () => {
    document.getElementById('machines')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReserve = (machine) => {
    setSelectedMachine(machine);
    setIsModalOpen(true);
  };

  const handleSlotSelect = (machineId, slotIndex, time) => {
    setSelectedSlot(`${machineId}-${slotIndex}`);
    setSelectedTime(time);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedMachine(null);
    setSelectedSlot(null);
    setSelectedTime('');
  };

  const handleReservationSubmit = (formData) => {
    alert(`Reservation confirmed!\n\nMachine: ${selectedMachine.name}\nDate: ${formData.date}\nTime: ${formData.time}\nStudent ID: ${formData.studentId}`);
    handleModalClose();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      
      <HeroSection onViewMachines={handleViewMachines} />
      
      <MachinesSection 
        machines={machinesData}
        onReserve={handleReserve}
        selectedSlot={selectedSlot}
        onSlotSelect={handleSlotSelect}
      />
      
      <ReservationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        selectedMachine={selectedMachine}
        selectedTime={selectedTime}
        onSubmit={handleReservationSubmit}
      />
      
      <Footer />
    </div>
  );
};

export default App;