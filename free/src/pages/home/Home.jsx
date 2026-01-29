import { useEffect } from "react";
import FeaturedPhotographers from "./FeaturedPhotographers";
import "./home.css";
import Footer from "../../components/footer/Footer";

const Home = () => {

  useEffect(() => {
  const overlay = document.querySelector(".fade-overlay");
  const hero = document.querySelector(".hero");

  if (!overlay || !hero) return;

  const handleScroll = () => {
    const rect = hero.getBoundingClientRect();
    const heroHeight = rect.height;

    const progress = Math.min(
      Math.max(-rect.top / heroHeight, 0),
      1
    );

    overlay.style.background = `linear-gradient(
  to bottom,
  rgba(255, 255, 255, ${progress * 0.2}),
  rgba(255, 255, 255, ${progress * 0.8})
)`;

  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); 

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="fade-overlay"></div>

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
