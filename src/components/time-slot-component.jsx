import React from 'react';

const TimeSlot = ({ time, isAvailable, isSelected, onClick }) => {
  const getClassName = () => {
    let className = 'time-slot ';
    
    if (isSelected) {
      className += 'time-slot-selected';
    } else if (isAvailable) {
      className += 'time-slot-available';
    } else {
      className += 'time-slot-unavailable';
    }
    
    return className;
  };

  return (
    <div 
      className={getClassName()}
      onClick={isAvailable ? onClick : undefined}
    >
      {time}
    </div>
  );
};

export default TimeSlot;