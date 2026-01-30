import { useEffect, useState } from "react";
import { State, City } from "country-state-city";
import "./crewRequirements.css";

const CrewRequirements = () => {
  /* ================= LOCATION STATES ================= */
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [stateOpen, setStateOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);

  const [stateSearch, setStateSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");

  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");

  /* ================= OTHER FILTERS ================= */
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  /* 🔥 APPLY MODAL STATE */
  const [activeRequirement, setActiveRequirement] = useState(null);

  /* ================= DATA ================= */
  const requirements = [
    {
      id: 1,
      title: "Wedding Shoot – Assistant Photographer",
      state: "Delhi",
      city: "Delhi",
      date: "2026-02-12",
      roles: ["Assistant Photographer"],
      budget: "₹5,000 / day",
      postedBy: "Rahul Photography",
      description:
        "Need an experienced assistant photographer for a full-day wedding shoot.",
    },
    {
      id: 2,
      title: "Pre-Wedding Video Project",
      state: "Maharashtra",
      city: "Mumbai",
      date: "2026-02-20",
      roles: ["Videographer", "Drone Operator"],
      budget: "₹15,000 total",
      postedBy: "LensCraft Studio",
      description:
        "Looking for creative videographer and drone operator for a pre-wedding shoot.",
    },
  ];

  /* ================= LOAD STATES ================= */
  useEffect(() => {
    setStates(State.getStatesOfCountry("IN"));
  }, []);

  /* ================= SELECT STATE ================= */
  const selectState = (state) => {
    setSelectedState(state);
    setSelectedCity("");
    setCities(City.getCitiesOfState("IN", state.isoCode));
    setStateOpen(false);
    setCityOpen(false);
    setStateSearch("");
    setCitySearch("");
  };

  /* ================= SELECT CITY ================= */
  const selectCity = (city) => {
    setSelectedCity(city.name);
    setCityOpen(false);
    setCitySearch("");
  };

  /* ================= CLEAR FILTERS ================= */
  const clearFilters = () => {
    setSelectedState(null);
    setSelectedCity("");
    setSelectedRole("");
    setSelectedDate("");
    setCities([]);
    setStateSearch("");
    setCitySearch("");
    setStateOpen(false);
    setCityOpen(false);
  };

  /* ================= FILTER LOGIC ================= */
  const filteredRequirements = requirements.filter((item) => {
    const stateMatch = selectedState
      ? item.state.toLowerCase() === selectedState.name.toLowerCase()
      : true;

    const cityMatch = selectedCity
      ? item.city.toLowerCase() === selectedCity.toLowerCase()
      : true;

    const roleMatch = selectedRole
      ? item.roles.includes(selectedRole)
      : true;

    const dateMatch = selectedDate ? item.date === selectedDate : true;

    return stateMatch && cityMatch && roleMatch && dateMatch;
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
        {/* STATE */}
        <div className="crew-dropdown">
          <div
            className="crew-input"
            onClick={() => {
              setStateOpen(!stateOpen);
              setCityOpen(false);
            }}
          >
            <input
              readOnly
              placeholder="Select State"
              value={selectedState?.name || ""}
            />
            <span>▾</span>
          </div>

          {stateOpen && (
            <div className="crew-menu">
              <input
                className="crew-search"
                placeholder="Search state..."
                value={stateSearch}
                onChange={(e) => setStateSearch(e.target.value)}
              />

              <div className="crew-scroll">
                {states
                  .filter((s) =>
                    s.name.toLowerCase().includes(stateSearch.toLowerCase())
                  )
                  .map((state) => (
                    <div
                      key={state.isoCode}
                      className="crew-item"
                      onClick={() => selectState(state)}
                    >
                      {state.name}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* CITY */}
        <div className="crew-dropdown">
          <div
            className="crew-input"
            onClick={() => selectedState && setCityOpen(!cityOpen)}
          >
            <input
              readOnly
              placeholder="Select City"
              value={selectedCity}
            />
            <span>▾</span>
          </div>

          {cityOpen && (
            <div className="crew-menu">
              <input
                className="crew-search"
                placeholder="Search city..."
                value={citySearch}
                onChange={(e) => setCitySearch(e.target.value)}
              />

              <div className="crew-scroll">
                {cities
                  .filter((c) =>
                    c.name.toLowerCase().includes(citySearch.toLowerCase())
                  )
                  .map((city) => (
                    <div
                      key={city.name}
                      className="crew-item"
                      onClick={() => selectCity(city)}
                    >
                      {city.name}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

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

        {/* CLEAR FILTERS */}
        <button
          type="button"
          className="crew-clear-btn"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>

      {/* LIST */}
      <div className="crew-list">
        {filteredRequirements.length === 0 ? (
          <p className="crew-empty">No requirements found.</p>
        ) : (
          filteredRequirements.map((item) => (
            <div className="crew-card" key={item.id}>
              <div className="crew-card-top">
                <h3>{item.title}</h3>
                <span className="crew-budget">{item.budget}</span>
              </div>

              <p className="crew-desc">{item.description}</p>

              <div className="crew-meta">
                <span>📍 {item.city}, {item.state}</span>
                <span>📅 {item.date}</span>
                <span>👥 {item.roles.join(", ")}</span>
              </div>

              <div className="crew-footer">
                <span className="crew-posted">
                  Posted by {item.postedBy}
                </span>
                <button
                  className="crew-apply"
                  onClick={() => setActiveRequirement(item)}
                >
                  Apply / Contact
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 🔥 APPLY / CONTACT MODAL */}
      {activeRequirement && (
        <div className="crew-modal-overlay">
          <div className="crew-modal">
            <h3>{activeRequirement.title}</h3>

            <p><strong>Posted by:</strong> {activeRequirement.postedBy}</p>
            <p>
              <strong>Location:</strong>{" "}
              {activeRequirement.city}, {activeRequirement.state}
            </p>
            <p>
              <strong>Roles:</strong>{" "}
              {activeRequirement.roles.join(", ")}
            </p>

            <p className="crew-desc">
              {activeRequirement.description}
            </p>

            <div className="modal-actions">
              <button
                className="secondary-btn"
                onClick={() =>
                  alert("Messaging feature coming soon 🚀")
                }
              >
                Send Message
              </button>

              <button
                className="danger-btn"
                onClick={() => setActiveRequirement(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CrewRequirements;
