import { useEffect, useState } from "react";
import { State, City } from "country-state-city";
import FeaturedPhotographers from "./FeaturedPhotographers";
import "./home.css";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [stateOpen, setStateOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);

  const [stateSearch, setStateSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");

  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    setStates(State.getStatesOfCountry("IN"));
  }, []);

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

  return (
    <>
      <section className="hero">
        <div className="fade-overlay"></div>

        <div className="hero-content">
          <h1>
            Find Your Perfect <span>Photographer</span>
          </h1>
          <p>Discover and book talented photographers in your city.</p>

          <div className="search-box">
            {/* STATE */}
            <div className="dropdown">
              <div
                className={`input-group ${stateOpen ? "open" : ""}`}
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
                <span className="dropdown-arrow">▾</span>
              </div>

              {stateOpen && (
                <div className="dropdown-menu">
                  <input
                    placeholder="Search state..."
                    value={stateSearch}
                    onChange={(e) => setStateSearch(e.target.value)}
                  />
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
              )}
            </div>

            {/* CITY */}
            <div className="dropdown">
              <div
                className={`input-group ${cityOpen ? "open" : ""}`}
                onClick={() => selectedState && setCityOpen(!cityOpen)}
              >
                <input
                  readOnly
                  placeholder="Select City"
                  value={selectedCity?.name || ""}
                />
                <span className="dropdown-arrow">▾</span>
              </div>

              {cityOpen && (
                <div className="dropdown-menu">
                  <input
                    placeholder="Search city..."
                    value={citySearch}
                    onChange={(e) => setCitySearch(e.target.value)}
                  />
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
              )}
            </div>

            {/* DATE */}
            <div className="input-group">
              <input type="date" />
            </div>

            {/* TIME */}
            <div className="input-group">
              <input type="time" />
            </div>

            <button className="search-btn">Search</button>
          </div>
        </div>
      </section>

      <FeaturedPhotographers />
      <Footer />
    </>
  );
};

export default Home;
