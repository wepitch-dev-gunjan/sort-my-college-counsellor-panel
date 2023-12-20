import React, { useState } from 'react';
import './style.scss';
import { Box, Slider } from '@mui/material';
import { FaIndianRupeeSign } from "react-icons/fa6";

const Filters = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [sessionFee, setSessionFee] = useState([200, 5000]);

const handleFeeChange = (e) => {
    setSessionFee(e.target.value);
    if(sessionFee[0] >= sessionFee[1])
        setSessionFee([sessionFee[0] - 100, sessionFee[1]])
}

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
      value: 45,
      label: '45m ',
    },
    {
      value: 60,
      label: '60m ',
    },
    {
      value: 75,
      label: '75m',
    },
    {
      value: 90,
      label: '90m',
    },
    {
      value: 105,
      label: '105m',
    },
    {
      value: 120,
      label: '120m',
    },
  ];

  function valuetext(value) {
    return `${value}m`;
  }

  return (
    <div className="filter-container">
      <div className="type">
        <p>Session Type</p>
        <select value={selectedType} onChange={handleTypeChange}>
          <option value="personal">Personal</option>
          <option value="group">Group</option>
          <option value="">All</option>
        </select>
      </div>
      <div className="fees">
        <p>Session Fee</p>
        <Box sx={{ width: 200 }}>
          <Slider
            value={sessionFee}
            onChange={handleFeeChange}
            min={200}
            max={5000}
            step={100}
          />
          <div className="values">
            {sessionFee.map((element, i) => (
                <span key={i}><FaIndianRupeeSign />{element}</span>
            ))}
          </div>
        </Box>
      </div>
      <div className="date-range">

      </div>
      <div className="duration">
        <p>Session duration</p>
        <Box sx={{ width: 250 }}>
          <Slider
            aria-label="Duration"
            defaultValue={45} // Set the starting point to 45 minutes
            getAriaValueText={valuetext}
            step={null}
            marks={marks}
            min={45}
            max={120}
          />
        </Box>
      </div>
      <div className="status">
        <p>Session Status</p>
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
