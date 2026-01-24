import "./SubscriptionStatus.css";

const SubscriptionStatus = () => {
  // 🔹 Subscription dates (backend se baad me replace ho sakta hai)
  const lastRenewed = new Date("2024-08-01");
  const expiresOn = new Date("2025-08-01");
  const today = new Date();

  // 🔹 Calculations
  const totalDuration =
    expiresOn.getTime() - lastRenewed.getTime();
  const timePassed =
    today.getTime() - lastRenewed.getTime();
  const remainingTime =
    expiresOn.getTime() - today.getTime();

  const daysLeft = Math.max(
    Math.ceil(remainingTime / (1000 * 60 * 60 * 24)),
    0
  );

  const progressPercentage = Math.min(
    Math.max((timePassed / totalDuration) * 100, 0),
    100
  );

  const isExpiringSoon = daysLeft <= 30;

  return (
    <div className="subscription-page">
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

          {/* 🔔 Expiry Warning */}
          {isExpiringSoon && (
            <p className="expiry-warning">
              ⚠ Your subscription expires in {daysLeft} days. Renew soon.
            </p>
          )}

          {/* 📊 Progress Bar */}
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          {/* 📄 Subscription Meta Info */}
          <div className="plan-meta">
            <div className="meta-item">
              <span className="meta-label">Last Renewed</span>
              <span className="meta-value">
                {lastRenewed.toDateString()}
              </span>
            </div>

            <div className="meta-item">
              <span className="meta-label">Expires On</span>
              <span className="meta-value">
                {expiresOn.toDateString()}
              </span>
            </div>

            <div className="meta-item">
              <span className="meta-label">Time Remaining</span>
              <span className="meta-value highlight">
                {daysLeft} days left
              </span>
            </div>

            <div className="meta-item">
              <span className="meta-label">Billing Cycle</span>
              <span className="meta-value">Yearly</span>
            </div>
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
