import "./forPhotographers.css";
import { Link } from "react-router-dom";

const ForPhotographers = () => {
  return (
    <section className="fp-hero">
      <div className="fp-container">
        <h1>
          Grow Your <span>Photography Business</span>
        </h1>

        <p>
          Join LensConnect and get discovered by clients looking for
          professional photographers like you.
        </p>

        <div className="fp-actions">
          <Link to="/auth/register" className="fp-btn primary">
            Get Started
          </Link>

          <Link to="/auth/login" className="fp-btn secondary">
            Already a Photographer? Log In
          </Link>
        </div>

        {/* Stats */}
        <div className="fp-stats">
          <div>
            <h3>10K+</h3>
            <span>Clients</span>
          </div>
          <div>
            <h3>5K+</h3>
            <span>Photographers</span>
          </div>
          <div>
            <h3>₹50L+</h3>
            <span>Earnings Paid</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForPhotographers;
