import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Availability.css";

const Availability = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState({
    fromDate: "",
    toDate: "",
    fromTime: "",
    toTime: "",
  });
  const [selectedRange, setSelectedRange] = useState(null);

  // 🔴 Dummy booked slots
  useEffect(() => {
    setEvents([
      {
        title: "BOOKED",
        start: "2026-01-27T10:00:00",
        end: "2026-01-27T13:00:00",
        classNames: ["BOOKED"],
      },
      {
        title: "BOOKED",
        start: "2026-01-29T15:00:00",
        end: "2026-01-29T18:00:00",
        classNames: ["BOOKED"],
      },
    ]);
  }, []);

  // 🟢 APPLY FILTER → CREATE SLOT
  const applyFilter = () => {
    if (
      !filter.fromDate ||
      !filter.toDate ||
      !filter.fromTime ||
      !filter.toTime
    ) {
      alert("❌ Please select all fields");
      return;
    }

    const start = new Date(`${filter.fromDate}T${filter.fromTime}`);
    const end = new Date(`${filter.toDate}T${filter.toTime}`);
    const now = new Date();

    if (start < now) {
      alert("❌ Past time not allowed");
      return;
    }

    if (end <= start) {
      alert("❌ End must be after start");
      return;
    }

    const tempEvent = {
      title: "SELECTED",
      start,
      end,
      classNames: ["SELECTED"],
    };

    setEvents((prev) => [
      ...prev.filter((e) => e.title !== "SELECTED"),
      tempEvent,
    ]);

    setSelectedRange({ start, end });
  };

  const confirmBooking = () => {
    alert(
      `✅ Booking Confirmed\n\nFrom: ${selectedRange.start.toLocaleString()}\nTo: ${selectedRange.end.toLocaleString()}`
    );
  };

  return (
    <div className="availability-page">
      <h1>Availability Calendar</h1>

      {/* 🧠 GUIDE */}
      <div className="calendar-info">
        <p>🔴 <strong>Red</strong> = Already Booked</p>
        <p>🟢 <strong>Green</strong> = Your Selected Slot</p>
      </div>

      {/* 🎛 FILTER PANEL */}
      <div className="filter-panel">
        <div>
          <label>From Date</label>
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) =>
              setFilter({ ...filter, fromDate: e.target.value })
            }
          />
        </div>

        <div>
          <label>From Time</label>
          <input
            type="time"
            onChange={(e) =>
              setFilter({ ...filter, fromTime: e.target.value })
            }
          />
        </div>

        <div>
          <label>To Date</label>
          <input
            type="date"
            min={filter.fromDate}
            onChange={(e) =>
              setFilter({ ...filter, toDate: e.target.value })
            }
          />
        </div>

        <div>
          <label>To Time</label>
          <input
            type="time"
            onChange={(e) =>
              setFilter({ ...filter, toTime: e.target.value })
            }
          />
        </div>

        <button className="apply-btn" onClick={applyFilter}>
          Apply
        </button>
      </div>

      {/* 📅 CALENDAR */}
      <div className="calendar-wrapper">
        <FullCalendar
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          events={events}
          allDaySlot={false}
          height="auto"
          slotMinTime="06:00:00"
          slotMaxTime="22:00:00"
          validRange={{ start: new Date() }}
        />
      </div>

      {/* ✅ CONFIRM BAR */}
      {selectedRange && (
        <div className="selected-slot">
          <div>
            <strong>Selected:</strong><br />
            {selectedRange.start.toLocaleString()} →{" "}
            {selectedRange.end.toLocaleString()}
          </div>

          <button className="confirm-btn" onClick={confirmBooking}>
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
};

export default Availability;
