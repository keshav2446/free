import FeaturedPhotographers from "./FeaturedPhotographers";
import "./home.css";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Find Your Perfect <span>Photographer</span>
          </h1>

          <p>
            Discover and book talented photographers in your city for any
            occasion.
          </p>

          <div className="search-box">
            <div className="input-group">
              <img
                src="/images/icons/location.png"
                alt="location"
                className="input-icon"
              />
              <input type="text" placeholder="City" />
            </div>

            <div className="input-group">
              <img
                src="/images/icons/calender.png"
                alt="calendar"
                className="input-icon"
              />
              <input type="date" />
            </div>

            <div className="input-group">
              <img
                src="/images/icons/clock.png"
                alt="clock"
                className="input-icon"
              />
              <input type="time" />
            </div>

            <button className="search-btn">Search</button>
          </div>
        </div>
      </section>

      {/* 🔥 ABOUT PLATFORM SECTION */}
      <section className="about-platform">
       <h2>
  Why Choose <span className="platform-text">Our Platform</span>?
</h2>

        <p className="about-subtitle">
          Everything you need to discover, book, and trust professional
          photographers.
        </p>

        <div className="about-features">
          <div className="about-card">
            <h4>📸 Verified Photographers</h4>
            <p>
              Browse real portfolios, reviews, and experience before booking.
            </p>
          </div>

          <div className="about-card">
            <h4>📅 Easy Booking</h4>
            <p>
              Check availability and contact photographers instantly.
            </p>
          </div>

          <div className="about-card">
            <h4>🛒 Equipment Marketplace</h4>
            <p>
              Buy and sell camera gear directly from trusted professionals.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PHOTOGRAPHERS */}
      <FeaturedPhotographers />

      <Footer />
    </>
  );
};

export default Home;
