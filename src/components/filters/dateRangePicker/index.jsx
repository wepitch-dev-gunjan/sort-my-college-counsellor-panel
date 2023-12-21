import React, { useState } from 'react';
import './style.scss';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import 'dayjs/locale/en'; // Import the locale if not already done

const DateRangePicker = () => {
  const [dates, setDates] = useState({
    startDate: '2023-04-17',
    endDate: '2023-04-17',
  });

  const handleStartDateChange = (date) => {
    setDates({ ...dates, startDate: date.format('YYYY-MM-DD') });
  };

  const handleEndDateChange = (date) => {
    setDates({ ...dates, endDate: date.format('YYYY-MM-DD') });
  };

  return (
    <div className="DateRangePicker-container">
      <div className="start-date">
        <DatePicker
          label="Start Date"
          value={dayjs(dates.startDate)}
          onChange={(value) => handleStartDateChange(value)}
        />
      </div>
      -
      <div className="end-date">
        <DatePicker
          label="End Date"
          value={dayjs(dates.endDate)}
          onChange={(value) => handleEndDateChange(value)}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;