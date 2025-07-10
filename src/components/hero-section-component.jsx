import React from 'react';

const HeroSection = ({ onViewMachines }) => {
  return (
    <div className="relative h-96 bg-cover bg-center flex items-center justify-center text-white mb-10" 
         style={{
           backgroundImage: "url('https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
         }}>
      <div className="absolute inset-0 bg-blue-600 bg-opacity-70"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-medium mb-4">Northwestern Campus Laundry Hub</h1>
        <p className="text-xl md:text-2xl mb-8">Reserve your washer-dryer in advance for a stress-free laundry day</p>
        <button 
          onClick={onViewMachines}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          View Machines
        </button>
      </div>
    </div>
  );
};

export default HeroSection;