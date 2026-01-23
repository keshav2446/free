import "./SubscriptionStatus.css";

const SubscriptionStatus = () => {
  return (
    <div className="subscription-page">
      {/* HEADER */}
      <h1 className="page-title">Subscription</h1>

      <div className="subscription-grid">
        {/* LEFT : CURRENT PLAN */}
        <div className="subscription-card">
          <h2>Your Plan</h2>
          <p className="muted-text">
            Manage your LensConnect subscription and billing details.
          </p>

          <div className="current-plan">
            <div className="plan-badge">🏅</div>

            <div className="plan-info">
              <h3>LensConnect Pro</h3>
              <p className="status-text">
                Your profile is active and visible.
              </p>
            </div>
          </div>

          <div className="renew-info">
            Your subscription renews on{" "}
            <strong>August 1, 2025</strong>.
          </div>

          <button className="outline-btn">Manage Billing</button>
        </div>

        {/* RIGHT : PRO PLAN */}
        <div className="pro-card">
          <div className="pro-header">
            ⭐ <h2>Go Pro</h2>
          </div>

          <p className="pro-subtitle">
            Unlock all features and grow your business.
          </p>

          <div className="price">
            ₹499 <span>/ year</span>
          </div>

          <ul className="features-list">
            <li>✔ Profile listed in search results</li>
            <li>✔ Unlimited portfolio uploads</li>
            <li>✔ Access to AI availability tools</li>
            <li>✔ Community discovery features</li>
            <li>✔ Direct client bookings (coming soon)</li>
            <li>✔ Priority support</li>
          </ul>

          <button className="pro-btn">⚡ Billing Portal</button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionStatus;
