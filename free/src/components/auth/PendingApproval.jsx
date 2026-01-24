import { Link } from "react-router-dom";
import "../../styles/pendingApproval.css";


const PendingApproval = () => {
  return (
    <div className="pending-container">
      <div className="pending-card">
        <h1>⏳ Account Under Review</h1>
        <p>
          Thank you for registering on <strong>LensConnect</strong>.
          <br />
          Your photographer profile is currently under admin review.
        </p>

        <p className="muted">
          This usually takes 24–48 hours.  
          You’ll be able to log in once approved.
        </p>

        <Link to="/" className="pending-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PendingApproval;
