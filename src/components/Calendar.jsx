import React from 'react';
import { format } from 'date-fns';

const Calendar = () => {
  // Get the current date
  const currentDate = new Date();

  // Format the date as per your requirement
  const formattedDate = format(currentDate, 'MMMM do, yyyy');

  return (
    <div>
      <p> <i className="fa-regular fa-calendar" aria-hidden="true"></i> {formattedDate}</p>
      {/* Your calendar content goes here */}
    </div>
  );
};

export default Calendar;
