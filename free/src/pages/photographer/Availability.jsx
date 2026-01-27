import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Availability.css";

const Availability = () => {
  const [events, setEvents] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    // 🔴 TEMP: Dummy booked slots (later Google Calendar / backend)
    const booked = [
      {
        title: "BOOKED",
        start: "2026-01-27T10:00:00",
        end: "2026-01-27T13:00:00",
        backgroundColor: "#fecaca",
        borderColor: "#dc2626",
      },
      {
        title: "BOOKED",
        start: "2026-01-29T15:00:00",
        end: "2026-01-29T18:00:00",
        backgroundColor: "#fecaca",
        borderColor: "#dc2626",
      },
    ];

    setEvents(booked);
  }, []);

  const handleDateClick = (info) => {
    setSelectedSlot(info.dateStr);
  };

  return (
    <div className="availability-page">
      <h1>Availability Calendar</h1>

      {/* 🧠 USER GUIDE */}
      <div className="calendar-info">
        <p>🔴 <strong>Red slots</strong> are already booked</p>
        <p>🟢 <strong>Empty space</strong> means available</p>
        <p>👉 Click on empty space to select a new booking slot</p>
      </div>

      {/* 📅 CALENDAR */}
      <div className="calendar-wrapper">
        <FullCalendar
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          events={events}
          dateClick={handleDateClick}
          height="auto"
          allDaySlot={false}
          slotMinTime="06:00:00"
          slotMaxTime="22:00:00"
        />
      </div>

      {/* ✅ SELECTED SLOT FEEDBACK */}
      {selectedSlot && (
        <div className="selected-slot">
          ✅ Selected Slot: <strong>{selectedSlot}</strong>
          <button className="confirm-btn">Confirm Booking</button>
        </div>
      )}
    </div>
  );
};

export default Availability;
