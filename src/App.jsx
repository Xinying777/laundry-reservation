import React, { useState } from 'react';
import HeroSection from './components/hero-section-component.jsx';
import MachinesSection from './components/machines-section-component.jsx';
import ReservationModal from './components/reservation-modal-component.jsx';
import Footer from './components/footer-component.jsx';
import { machinesData } from './data/machine-data.js';
import './App.css'; 
// The App is the main component of the laundry reservation system, responsible for the overall page layout and state management.
// Main functions include: render each section of the page (top banner, washing machine list, reservation popup, bottom information),

// State management: selected washing machine | popup switch | selected time mark | specific time value
const App = () => {
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  // Scroll to the washing machine area (triggered by clicking the top button)
  const handleViewMachines = () => {
    document.getElementById('machines')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Open the reservation window (click the washing machine card to trigger)
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