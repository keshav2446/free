import { useState } from "react";
import AvailabilityCalendar from "./AvailabilityCalendar";
import "./AIAvailability.css";

const AIAvailability = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [conflictResult, setConflictResult] = useState(null);

  const suggestAvailability = () => {
    setSuggestions([
      {
        slot: "Jan 26 • 10:00 AM – 12:00 PM",
        reason: "Matches your morning preference & no nearby bookings",
      },
      {
        slot: "Jan 27 • 11:00 AM – 1:00 PM",
        reason: "Optimized for travel buffer and client demand",
      },
      {
        slot: "Jan 28 • 9:30 AM – 11:30 AM",
        reason: "Low calendar load, high acceptance rate",
      },
    ]);
  };

  const checkConflicts = () => {
    setConflictResult({
      level: "high",
      message: "Hard conflict with existing booking at 11:00 AM",
    });
  };

  return (
    <div className="availability-page">
      <h1>AI Availability Assistant</h1>

      {/* 🤖 AI STATUS */}
      <div className="ai-status">
        🤖 AI Active • Learning from your booking patterns
      </div>

      {/* 📅 CALENDAR */}
      <AvailabilityCalendar />

      {/* 🎯 AI SUGGESTIONS */}
      <div className="card">
        <h2>Smart Availability Generator</h2>
        <p className="muted">
          AI analyzes your habits, travel buffer & booking history.
        </p>

        <div className="grid-2">
          <div>
            <label>Preferred Time Range</label>
            <input type="text" defaultValue="9:00 AM – 1:00 PM" />
          </div>

          <div>
            <label>Exclude Days</label>
            <input type="text" defaultValue="Sunday" />
          </div>
        </div>

        <div className="grid-2">
          <div>
            <label>Travel Buffer (minutes)</label>
            <input type="number" defaultValue={30} />
          </div>

          <div>
            <label>Max Bookings / Day</label>
            <input type="number" defaultValue={3} />
          </div>
        </div>

        <label>Shoot Preferences</label>
        <textarea defaultValue="Prefer weddings & outdoor portrait shoots" />

        <button className="primary-btn" onClick={suggestAvailability}>
          🤖 Generate Smart Slots
        </button>

        {suggestions.length > 0 && (
          <div className="suggestions">
            <h4>Recommended Slots</h4>

            {suggestions.map((s, i) => (
              <div key={i} className="slot-card">
                <div>
                  <strong>{s.slot}</strong>
                  <p className="slot-reason">{s.reason}</p>
                </div>

                <div className="slot-actions">
                  <button>Apply</button>
                  <button className="ghost">Copy</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ⚠️ CONFLICT DETECTOR */}
      <div className="card">
        <h2>AI Conflict Analyzer</h2>
        <p className="muted">
          Detects time overlap, travel issues & overload risk.
        </p>

        <div className="grid-2">
          <input type="datetime-local" />
          <input type="datetime-local" />
        </div>

        <button className="secondary-btn" onClick={checkConflicts}>
          ⚠️ Analyze Conflict
        </button>

        {conflictResult && (
          <div className={`conflict-box ${conflictResult.level}`}>
            🔴 {conflictResult.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIAvailability;
