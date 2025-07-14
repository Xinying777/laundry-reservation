import React from 'react';

const HeroSection = ({ onViewMachines }) => {
  return (
    <div className="hero-section" 
         style={{
          //  backgroundImage: "url('https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
         }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Northwestern Campus Laundry Hub</h1>
        <p className="hero-subtitle">Reserve your washer-dryer in advance for a stress-free laundry day</p>
        <button 
          onClick={onViewMachines}
          className="hero-button"
        >
          View Machines
        </button>
      </div>
    </div>
  );
};

export default HeroSection;