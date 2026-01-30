import { useEffect, useState } from "react";
import { City } from "country-state-city";
import "./crewRequirements.css";

const CrewRequirements = () => {
  /* ================= STATES ================= */
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const [selectedRole, setSelectedRole] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  /* ================= DATA ================= */
  const requirements = [
    {
      id: 1,
      title: "Wedding Shoot – Assistant Photographer",
      city: "Delhi",
      date: "2026-02-12",
      roles: ["Assistant Photographer"],
      budget: "₹5,000 / day",
      postedBy: "Rahul Photography",
      description:
        "Need an experienced assistant photographer for a full-day wedding shoot."
    },
    {
      id: 2,
      title: "Pre-Wedding Video Project",
      city: "Mumbai",
      date: "2026-02-20",
      roles: ["Videographer", "Drone Operator"],
      budget: "₹15,000 total",
      postedBy: "LensCraft Studio",
      description:
        "Looking for creative videographer and drone operator for a pre-wedding shoot."
    }
  ];

  /* ================= LOAD CITIES (INDIA) ================= */
  useEffect(() => {
    const allCities = City.getCitiesOfCountry("IN");
    setCities(allCities);
  }, []);

  /* ================= FILTER LOGIC ================= */
  const filteredRequirements = requirements.filter((item) => {
    const cityMatch = selectedCity
      ? item.city.toLowerCase() === selectedCity.toLowerCase()
      : true;

    const roleMatch = selectedRole
      ? item.roles.includes(selectedRole)
      : true;

    const dateMatch = selectedDate
      ? item.date === selectedDate
      : true;

    return cityMatch && roleMatch && dateMatch;
  });

  /* ================= UI ================= */
  return (
    <section className="crew-page">
      {/* HEADER */}
      <div className="crew-header">
        <h1>Crew Requirements</h1>
        <p>
          Browse photography projects and connect directly with photographers.
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="crew-filters">
        {/* CITY */}
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">All Cities</option>
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>

        {/* ROLE */}
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="Assistant Photographer">
            Assistant Photographer
          </option>
          <option value="Videographer">Videographer</option>
          <option value="Drone Operator">Drone Operator</option>
        </select>

        {/* DATE */}
        <input
          type="date"
          value={selectedDate || ""}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {/* LIST */}
      <div className="crew-list">
        {filteredRequirements.length === 0 ? (
          <p className="crew-empty">
            No requirements found.
          </p>
        ) : (
          filteredRequirements.map((item) => (
            <div className="crew-card" key={item.id}>
              <div className="crew-card-top">
                <h3>{item.title}</h3>
                <span className="crew-budget">{item.budget}</span>
              </div>

              <p className="crew-desc">{item.description}</p>

              <div className="crew-meta">
                <span>📍 {item.city}</span>
                <span>📅 {item.date}</span>
                <span>👥 {item.roles.join(", ")}</span>
              </div>

              <div className="crew-footer">
                <span className="crew-posted">
                  Posted by {item.postedBy}
                </span>
                <button className="crew-apply">
                  Apply / Contact
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default CrewRequirements;
