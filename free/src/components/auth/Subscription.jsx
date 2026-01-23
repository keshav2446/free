import { useNavigate } from "react-router-dom";
import "../../styles/auth.css";

const Subscription = () => {
  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();

    // 🔐 Later yahin payment / Razorpay / Stripe logic aayega
    // Abhi direct dashboard redirect

    navigate("/photographer/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Activate Your Subscription</h2>
        <p className="auth-subtitle">
          Unlock full access to LensConnect
        </p>

        <div className="plan-box">
          <h3>₹499 / Year</h3>
          <ul>
            <li>✔ Verified Photographer Badge</li>
            <li>✔ Client Booking Requests</li>
            <li>✔ AI Availability Management</li>
            <li>✔ Community Access</li>
          </ul>
        </div>

        <form onSubmit={handleSubscribe}>
          <button type="submit" className="auth-btn">
            Subscribe & Continue
          </button>
        </form>

        <p className="auth-footer muted">
          Secure payment • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default Subscription;
