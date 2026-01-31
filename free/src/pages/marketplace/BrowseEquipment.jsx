import { useState } from "react";
import { State, City } from "country-state-city";
import "./browseEquipment.css";

/* 🔥 MULTIPLE IMAGES PER ITEM */
const equipmentData = [
  {
    id: 1,
    name: "Canon EOS R5",
    price: "₹2,45,000",
    condition: "Like New",
    city: "Mumbai",
    stateCode: "MH",
    seller: "Amit Sharma",
    images: [
      "https://images.unsplash.com/photo-1519183071298-a2962be96cda?w=800",
      "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800",
    ],
  },
  {
    id: 2,
    name: "Sony A7 III",
    price: "₹1,25,000",
    condition: "Good",
    city: "Delhi",
    stateCode: "DL",
    seller: "Rohit Verma",
    images: [
      "https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=800",
      "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800",
    ],
  },
  {
    id: 3,
    name: "RF 24-70mm f/2.8",
    price: "₹1,60,000",
    condition: "Excellent",
    city: "Bangalore",
    stateCode: "KA",
    seller: "Neha Kapoor",
    images: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800",
      "https://images.unsplash.com/photo-1519183071298-a2962be96cda?w=800",
    ],
  },
];

/* 🔥 EQUIPMENT CARD */
const EquipmentCard = ({ item }) => {
  const [index, setIndex] = useState(0);
  

  const prev = () =>
    setIndex((i) => (i === 0 ? item.images.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === item.images.length - 1 ? 0 : i + 1));

  return (
    <div className="equipment-card">
      <div className="equipment-image">
        <img src={item.images[index]} alt={item.name} />

        {item.images.length > 1 && (
          <>
            <button className="slide-btn prev" onClick={prev}>‹</button>
            <button className="slide-btn next" onClick={next}>›</button>

            <div className="slider-dots">
              {item.images.map((_, i) => (
                <span key={i} className={i === index ? "active" : ""} />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="equipment-body">
        <h3>{item.name}</h3>

        <div className="equipment-meta">
          <span>📍 {item.city}</span>
          <span>{item.condition}</span>
        </div>

        <div className="equipment-footer">
          <span className="price">{item.price}</span>
          <button
            className="contact-btn"
            onClick={() => alert("Contact feature coming soon 🚀")}
          >
            Contact Seller
          </button>
        </div>

        <p className="seller">Seller: {item.seller}</p>
      </div>
    </div>
  );
};

const BrowseEquipment = () => {
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const [states] = useState(() => State.getStatesOfCountry("IN"));
  const [cities, setCities] = useState([]);

  const [stateOpen, setStateOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);

  const [stateSearch, setStateSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");

  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [condition, setCondition] = useState("");

  const selectState = (state) => {
    setSelectedState(state);
    setSelectedCity(null);
    setCities(City.getCitiesOfState("IN", state.isoCode));
    setStateOpen(false);
    setCityOpen(false);
  };

  const selectCity = (city) => {
    setSelectedCity(city);
    setCityOpen(false);
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedState(null);
    setSelectedCity(null);
    setCondition("");
    setCities([]);
    setStateSearch("");
    setCitySearch("");
    setStateOpen(false);
    setCityOpen(false);
  };

  const filteredEquipment = equipmentData.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (!selectedState || item.stateCode === selectedState.isoCode) &&
      (!selectedCity || item.city === selectedCity.name) &&
      (!condition || item.condition === condition)
    );
  });

  return (
    <div className="browse-equipment-page">
      <div className="browse-header">
        <h1>Browse Equipment</h1>
        <p>Camera gear listed by verified photographers</p>

        <div className="search-filter-row">
          <input
            type="text"
            placeholder="Search camera, lens, accessory..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className="filter-btn"
            onClick={() => setShowFilter(!showFilter)}
          >
            Filters ⚙️
          </button>
        </div>

        {showFilter && (
          <div className="filter-panel">
            {/* STATE */}
            <div className="dropdown">
              <div
                className="input-group"
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
                <div className="dropdown-menu inside">
                  <input
                    className="dropdown-search"
                    placeholder="Search state..."
                    value={stateSearch}
                    onChange={(e) => setStateSearch(e.target.value)}
                  />

                  <div className="dropdown-scroll">
                    {states
                      .filter((s) =>
                        s.name.toLowerCase().includes(stateSearch.toLowerCase())
                      )
                      .map((state) => (
                        <div
                          key={state.isoCode}
                          className="dropdown-item"
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
            <div className="dropdown">
              <div
                className="input-group"
                onClick={() => selectedState && setCityOpen(!cityOpen)}
              >
                <input
                  readOnly
                  placeholder="Select City"
                  value={selectedCity?.name || ""}
                />
                <span>▾</span>
              </div>

              {cityOpen && (
                <div className="dropdown-menu inside">
                  <input
                    className="dropdown-search"
                    placeholder="Search city..."
                    value={citySearch}
                    onChange={(e) => setCitySearch(e.target.value)}
                  />

                  <div className="dropdown-scroll">
                    {cities
                      .filter((c) =>
                        c.name.toLowerCase().includes(citySearch.toLowerCase())
                      )
                      .map((city) => (
                        <div
                          key={city.name}
                          className="dropdown-item"
                          onClick={() => selectCity(city)}
                        >
                          {city.name}
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* CONDITION */}
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value="">Condition</option>
              <option value="Like New">Like New</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
            </select>

            <button className="filter-btn" onClick={clearFilters}>
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <div className="equipment-grid">
        {filteredEquipment.map((item) => (
          <EquipmentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BrowseEquipment;
