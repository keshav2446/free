import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/auth.css";

const Subscription = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please login again");
      navigate("/auth/login");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:5000/api/subscription/activate",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Subscription failed");
      }

      // ✅ Subscription activated
      navigate("/auth/pending-approval");
    } catch (error) {
      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Activate Your Subscription</h2>
        <p className="auth-subtitle">
          Subscription required to unlock your account
        </p>

        <div className="plan-box">
          <h3>Pro Photographer Plan</h3>
          <ul>
            <li>✔ Verified Photographer Badge</li>
            <li>✔ Client Booking Requests</li>
            <li>✔ AI Availability Management</li>
            <li>✔ Community Access</li>
            <li>✔ Priority Listing</li>
          </ul>

          <h2 style={{ marginTop: "12px" }}>₹499 / Year</h2>
        </div>

        <form onSubmit={handleSubscribe}>
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Activating..." : "Pay & Activate (Demo)"}
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
