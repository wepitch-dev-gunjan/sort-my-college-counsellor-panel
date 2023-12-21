import React, { useState } from 'react';
import './style.scss';
import { Box, Slider } from '@mui/material';
import { FaIndianRupeeSign } from "react-icons/fa6";

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import DateRangePicker from './dateRangePicker';

const Filters = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [sessionFee, setSessionFee] = useState([0, 5000]);

  const handleFeeChange = (e, newValue) => {
    setSessionFee(newValue);
    if (newValue[0] >= newValue[1]) {
      setSessionFee([newValue[0] - 100, newValue[1]]);
    }
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

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
            min={0}
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
        <p>Select Date Range</p>
        <DateRangePicker />
      </div>
      <div className="duration">
        <p>Session duration</p>
        <Box sx={{ width: 250 }}>
          <Slider
            aria-label="Duration"
            defaultValue={45}
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
          {/* <option value="">Select status</option> */}
          <option value="available">Available</option>
          <option value="booked">Booked</option>
          <option value="rescheduled">Rescheduled</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
