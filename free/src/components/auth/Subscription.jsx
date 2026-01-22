import "../../styles/auth.css";

const Subscription = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Annual Subscription</h2>
        <p className="auth-subtitle">
          Become a verified professional photographer
        </p>

        <div className="plan-box">
          <h3>₹499 / Year</h3>
          <ul>
            <li>✔ Verified profile badge</li>
            <li>✔ Portfolio showcase</li>
            <li>✔ Community access</li>
            <li>✔ Admin-approved visibility</li>
          </ul>
        </div>

        <button className="auth-btn">
          Proceed to Payment
        </button>

        <p className="auth-footer muted">
          Approval required after payment
        </p>
      </div>
    </div>
  );
};

export default Subscription;
