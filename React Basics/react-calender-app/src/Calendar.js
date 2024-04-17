// src/Calendar.js
import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth } from 'date-fns';

const festivalsData = [
  { date: new Date(2023, 11, 25), name: 'Christmas' },
  { date: new Date(2023, 0, 1), name: 'New Year' },
  // Add more festival data as needed
];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderHeader = () => {
    return (
      <div>
        <button onClick={() => prevMonth()}>Previous Month</button>
        <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
        <button onClick={() => nextMonth()}>Next Month</button>
      </div>
    );
  };

  const renderDaysOfWeek = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className="days-of-week">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const startDate = startOfMonth(currentMonth);
    const endDate = endOfMonth(currentMonth);
    const days = eachDayOfInterval({ start: startDate, end: endDate });

    return (
      <div className="cells">
        {days.map((day) => (
          <div key={day} className={`cell ${isSameMonth(day, currentMonth) ? '' : 'disabled'}`}>
            <div className="date">{format(day, 'd')}</div>
            {renderFestivals(day)}
          </div>
        ))}
      </div>
    );
  };

  const renderFestivals = (day) => {
    const festivals = festivalsData.filter((festival) => (festival.date, day));
    return (
      <div className="festivals">
        {festivals.map((festival) => (
          <div key={festival.date} className="festival">
            {festival.name}
          </div>
        ))}
      </div>
    );
  };

  const nextMonth = () => {
    setCurrentMonth((prevMonth) => new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth((prevMonth) => new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1, 1));
  };

  return (
    <div className="calendar">
      {renderHeader()}
      {renderDaysOfWeek()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
