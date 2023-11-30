import React from "react";
import "../options/Common.css";
import { useState } from "react";

const TimeSlots = (props) => {
  const [selectedDayItem, setSelectedDayItem] = useState(null);
  const [selectedTimeItem, setSelectedTimeItem] = useState(null);
  const [slotDay, setSlotDay] = useState("");
  const [slotTime, setSlotTime] = useState("");
  const days = [
    "Sep 15 FRI",
    "Sep 16 SAT",
    "Sep 18 MON",
    "Sep 19 TUE",
    "Sep 20 THU",
  ];
  const timeSlotCategories = [
    {
      category: "Morning",
      slots: ["9:00 AM", "10:00 AM", "11:00 AM"],
    },
    {
      category: "Afternoon",
      slots: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"],
    },
    {
      category: "Evening",
      slots: ["4:00 PM", "5:00 PM", "6:00 PM"],
    },
  ];

  const handleSelectTime = (selectedTime) => {
    console.log(selectedTime);
    setSlotTime(selectedTime);
    setSelectedTimeItem(selectedTime);
    props.actionProvider.handleSelectTime(selectedTime);
  };

  const handleSelectDay = (selectedDay) => {
    console.log(selectedDay);
    setSlotDay(selectedDay);
    setSelectedDayItem(selectedDay);
    props.actionProvider.handleSelectDay(selectedDay);
  };

  return (
    <div>
      {days.map((day, index) => (
        <button
          className={`option-button ${
            selectedDayItem === day ? "daySelected" : ""
          }`}
          key={index}
          onClick={() => handleSelectDay(day)}
        >
          {day}
        </button>
      ))}
      {timeSlotCategories.map((categoryData, index) => (
        <div key={index} className="time-slot-category">
          <h2 style={{ fontSize: "11px" }}>{categoryData.category}</h2>
          {categoryData.slots.map((slot, index) => (
            <button
              key={slot}
              onClick={() => handleSelectTime(slot)}
              className={`option-button ${
                selectedTimeItem === slot ? "timeSelected" : ""
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      ))}
      {slotDay && slotTime && (
        <button className="option-button" style={{ marginLeft: "100px" }}>
          {slotDay + " "}
          {slotTime}
        </button>
      )}
    </div>
  );
};

export default TimeSlots;
