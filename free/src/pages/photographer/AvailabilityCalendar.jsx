import { useState } from "react";
import "./AIAvailability.css";

const HOURS = [
  "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00",
  "17:00", "18:00",
];

const AvailabilityCalendar = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [slots, setSlots] = useState([]);

  const toggleSlot = (time) => {
    setSlots((prev) =>
      prev.includes(time)
        ? prev.filter((t) => t !== time)
        : [...prev, time]
    );
  };

  return (
    <div className="availability-card">
      <h3>Your Availability</h3>

      <label className="label">Select Date</label>
      <input
        type="date"
        className="date-input"
        value={selectedDate}
        onChange={(e) => {
          setSelectedDate(e.target.value);
          setSlots([]);
        }}
      />

      {selectedDate && (
        <>
          <p className="muted-text">
            Select available time slots for {selectedDate}
          </p>

          <div className="slots-grid">
            {HOURS.map((time) => (
              <button
                key={time}
                className={`slot ${slots.includes(time) ? "active" : ""}`}
                onClick={() => toggleSlot(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AvailabilityCalendar;
