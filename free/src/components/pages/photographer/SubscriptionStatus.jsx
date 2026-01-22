import "../../styles/photographer.css";

const SubscriptionStatus = () => {
  return (
    <div className="page">
      <h1 className="page-title">Subscription Status</h1>

      <div className="card">
        <h3>₹499 / Year</h3>
        <p>Status: <span className="status active">Active</span></p>
        <p>Valid till: January 2027</p>

        <button className="primary-btn">Renew Subscription</button>
      </div>
    </div>
  );
};

export default SubscriptionStatus;
