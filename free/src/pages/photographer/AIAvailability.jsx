import { useState } from "react";
import AvailabilityCalendar from "./AvailabilityCalendar";
import "./AIAvailability.css";
// import useSubscription from "../../hooks/useSubscription"; // later

const AIAvailability = () => {
  // const { plan } = useSubscription(); // later backend
  const [suggestions, setSuggestions] = useState([]);
  const [conflictResult, setConflictResult] = useState("");

  const suggestAvailability = () => {
    // 🔮 fake AI response (frontend only)
    setSuggestions([
      "Jan 26 • 10:00 AM – 12:00 PM",
      "Jan 27 • 11:00 AM – 1:00 PM",
      "Jan 28 • 9:30 AM – 11:30 AM",
    ]);
  };

  const checkConflicts = () => {
    setConflictResult("❌ Conflict detected with existing booking at 11:00 AM");
  };

  /* 🔒 PRO LOCK (enable later)
  if (plan !== "PRO") {
    return (
      <div className="ai-locked">
        <h2>🔒 AI Availability is a Pro Feature</h2>
        <p className="muted">
          Upgrade to Pro to unlock AI-powered scheduling.
        </p>
        <button className="primary-btn">🚀 Upgrade to Pro</button>
      </div>
    );
  }
  */

  return (
    <div className="availability-page">
      <h1>AI Availability Assistant</h1>

      {/* ================= CALENDAR ================= */}
      <AvailabilityCalendar />

      {/* ================= AI SUGGESTIONS ================= */}
      <div className="card">
        <h2>AI-Powered Availability Suggestions</h2>
        <p className="muted">
          Let AI analyze your preferences and suggest optimal booking slots.
        </p>

        <label>Scheduling Preferences</label>
        <textarea
          defaultValue="Prefer morning shoots from 9 AM to 1 PM. No bookings on Sundays."
        />

        <label>Average Travel Time (minutes)</label>
        <input type="number" defaultValue={30} />

        <label>Max Bookings Per Day</label>
        <input type="number" defaultValue={3} />

        <button className="primary-btn" onClick={suggestAvailability}>
          🤖 Suggest Availability
        </button>

        {suggestions.length > 0 && (
          <div className="suggestions">
            <h4>Suggested Slots</h4>
            <div className="chips">
              {suggestions.map((slot, i) => (
                <span key={i} className="slot-chip">
                  {slot}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ================= CONFLICT CHECKER ================= */}
      <div className="card">
        <h2>Smart Booking Conflict Detector</h2>
        <p className="muted">
          Check if a new booking conflicts with your schedule.
        </p>

        <div className="grid-2">
          <input type="datetime-local" />
          <input type="datetime-local" />
        </div>

        <button className="secondary-btn" onClick={checkConflicts}>
          ⚠️ Check for Conflicts
        </button>

        {conflictResult && (
          <p className="conflict-text">{conflictResult}</p>
        )}
      </div>
    </div>
  );
};

export default AIAvailability;
