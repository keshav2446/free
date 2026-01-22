import "./home.css";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Find Your Perfect <span>Photographer</span>
        </h1>

        <p>
          Discover and book talented photographers in your city for any occasion.
        </p>

        <div className="search-box">
          <div className="input-group">
            <span>📍</span>
            <input type="text" placeholder="City" />
          </div>

          <div className="input-group">
            <span>📅</span>
            <input type="date" />
          </div>

          <div className="input-group">
            <span>⏰</span>
            <input type="time" />
          </div>

          <button className="search-btn">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
