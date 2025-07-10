import React from 'react';

const TimeSlot = ({ time, isAvailable, isSelected, onClick }) => {
  const baseClasses = "p-2 text-center rounded-md text-sm font-medium transition-colors";
  const availableClasses = isAvailable 
    ? "bg-blue-50 text-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white"
    : "bg-gray-100 text-gray-400 cursor-not-allowed";
  const selectedClasses = isSelected ? "bg-blue-600 text-white" : "";

  return (
    <div 
      className={`${baseClasses} ${availableClasses} ${selectedClasses}`}
      onClick={isAvailable ? onClick : undefined}
    >
      {time}
    </div>
  );
};

export default TimeSlot;