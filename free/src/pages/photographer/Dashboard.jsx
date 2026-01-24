import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const isSubscribed = user?.subscriptionActive;

  // 🔹 Mock subscription data (backend ready)
  const expiresOn = new Date("2025-08-01");
  const today = new Date();
  const daysLeft = Math.max(
    Math.ceil((expiresOn - today) / (1000 * 60 * 60 * 24)),
    0
  );

  const isExpiringSoon = isSubscribed && daysLeft <= 30;

  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  return (
    <div className="dashboard-content">
      <h1>Dashboard</h1>

      {/* ⚡ QUICK ACTIONS */}
      <div className="quick-actions">
        <button onClick={() => navigate("/profile")}>Edit Profile</button>
        <button onClick={() => navigate("/portfolio")}>Add Portfolio</button>
        <button onClick={() => navigate("/availability")}>
          Set Availability
        </button>
      </div>

      {/* 💎 SUBSCRIPTION STATUS CARD */}
      <div className={`subscription-status ${!isSubscribed ? "free" : ""}`}>
        {isSubscribed ? (
          <>
            <div>
              <strong>Pro Plan</strong> • Active
              <p>⏳ {daysLeft} days remaining</p>
              {isExpiringSoon && (
                <span className="warning">
                  ⚠ Expiring soon. Renew to avoid interruption.
                </span>
              )}
            </div>
            <button onClick={() => navigate("/auth/subscription")}>
              Manage Subscription
            </button>
          </>
        ) : (
          <>
            <div>
              <strong>Free Plan</strong>
              <p>Upgrade to unlock bookings & earnings</p>
            </div>
            <button onClick={() => navigate("/auth/subscription")}>
              Upgrade to Pro
            </button>
          </>
        )}
      </div>

      {/* 📊 STATS */}
      <div className="stats-grid">
        <div
          className={`stat-card ${!isSubscribed ? "locked" : ""}`}
          onClick={() => !isSubscribed && setShowUpgradeModal(true)}
        >
          <p>Total Earnings</p>
          <h2>{isSubscribed ? "₹1,25,000" : "—"}</h2>
          <span>
            {isSubscribed
              ? "+12% from last month"
              : "Unlock earnings insights"}
          </span>
        </div>

        <div
          className={`stat-card ${!isSubscribed ? "locked" : ""}`}
          onClick={() => !isSubscribed && setShowUpgradeModal(true)}
        >
          <p>Upcoming Bookings</p>
          <h2>{isSubscribed ? "8" : "—"}</h2>
          <span>
            {isSubscribed ? "+2 from last month" : "Bookings unlock on Pro"}
          </span>
        </div>

        <div className="stat-card">
          <p>Profile Views</p>
          <h2>2,430</h2>
          <span>Public visibility 🟢</span>
        </div>
      </div>

      {/* 📦 LOWER SECTION */}
      <div className="dashboard-bottom">
        <div className="box">
          <h3>Recent Bookings</h3>
          {isSubscribed ? (
            <p>📸 No bookings yet. Optimize your profile to get discovered.</p>
          ) : (
            <p>
              🔒 Bookings unlock after subscription
              <br />
              <button
                className="link-btn"
                onClick={() => setShowUpgradeModal(true)}
              >
                See benefits →
              </button>
            </p>
          )}
        </div>

        <div className="box">
          <h3>Notifications</h3>
          <p>🔔 Tip: Upload 3 more photos to boost visibility</p>
        </div>
      </div>

      {/* 🔒 UPGRADE MODAL */}
      {showUpgradeModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Upgrade to Pro 🚀</h2>
            <ul>
              <li>✔ Get client bookings</li>
              <li>✔ Track earnings & growth</li>
              <li>✔ AI availability tools</li>
              <li>✔ Priority support</li>
            </ul>

            <div className="modal-actions">
              <button onClick={() => navigate("/auth/subscription")}>
                Upgrade Now
              </button>
              <button
                className="secondary"
                onClick={() => setShowUpgradeModal(false)}
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
