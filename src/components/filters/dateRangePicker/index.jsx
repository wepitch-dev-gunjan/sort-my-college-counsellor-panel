import { useState } from 'react';
import './style.scss'
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const DateRangePicker = () => {
  const [dates, setDates] = useState({
    startDate: dayjs('2023-04-17'),
    endDate: dayjs('2023-04-17'),
  });
  return (
    <div className='DateRangePicker-container'>
      <div className="start-date">
        <DatePicker
          label="Controlled picker"
          value={dates.startDate}
          onChange={(value) => setDates({ ...dates, startDate: value })}
        />
      </div>
      -
      <div className="end-date">
        <DatePicker
          label="Controlled picker"
          value={dates.endDate}
          onChange={(value) => setDates({ ...dates, endDate: value })}
        />
        {dates.endDate}
      </div>
    </div>
  );
};

export default DateRangePicker;