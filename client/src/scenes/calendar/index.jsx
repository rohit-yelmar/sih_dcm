import { useState } from "react";
import Calendar from "react-calendar";
import "../calendar/calender.css";
import Time from "./Times.js";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  return (
    <div className="app">
      <h1 className="header">Calendar</h1>
      <div className="middle">
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={() => setShowTime(true)}
        />
      </div>

      {date.length > 0 ? (
        <p>
          <span>Start:</span>
          {date[0].toDateString()}
          &nbsp; &nbsp;
          <span>End:</span>
          {date[1].toDateString()}
        </p>
      ) : (
        <p className="middle">
          <span className="margintop">Default selected date:</span>
          {date.toDateString()}
        </p>
      )}
      <div>
        <Time showTime={showTime} date={date} />
      </div>
    </div>
  );
};

export default CalendarComponent;
