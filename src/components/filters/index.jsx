import React, { useState } from 'react';
import './style.scss'
import { Box, Slider } from '@mui/material';

const Filters = () => {
  const [selectedType, setSelectedType] = useState(''); // State to track the selected type
  const [selectedStatus, setSelectedStatus] = useState(''); // State to track the selected type

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const feeMarks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 500,
      label: '500',
    },
    {
        value: 1000,
        label: '1000',
      },
      {
        value: 1500,
        label: '1500',
      },
      {
        value: 2000,
        label: '2000',
      },
  ];
  
  function valuetxt(value) {
    return `${value}`;
  }

  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 15,
      label: '15 min',
    },
    {
      value: 30,
      label: '30 min ',
    },
    {
      value: 60,
      label: '60 min ',
    },
    {
        value: 90,
        label: '90 min',
    },
    {
        value: 120,
        label: '120 min',
        
    },
  ];
  
  function valuetext(value) {
    return `${value} min`;
  }


  return (  

    <div className="filter-container">
      <div className="type">
        <select value={selectedType} onChange={handleTypeChange}>
          <option value="">Select session Type</option>
          <option value="personal">Personal</option>
          <option value="group">Group</option>
        </select>
      </div>
      <div className="fees">
        <p>Session Fee</p>
        <Box sx={{ width: 200 }}>
        <Slider
        aria-label="Fees"
        getAriaValueText={valuetxt}
        marks={feeMarks}
        />
        </Box>
      </div>
      <div className="duration">
        <p>Session duration</p>
        <Box sx={{ width: 320 }}>
           <Slider
              aria-label="Duration"
              defaultValue={60}
              getAriaValueText={valuetext}
              marks={marks}
           />
        </Box>
      </div>
      <div className="status">
        <select value={selectedStatus} onChange={handleStatusChange}>
          <option value="">Select status</option>
          <option value="personal">Available</option>
          <option value="group">Booked</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
