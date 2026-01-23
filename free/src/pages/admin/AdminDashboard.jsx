import "./admin.css";

const AdminDashboard = () => {
  return (
    <div className="admin-page">
      {/* PAGE HEADER */}
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p className="muted">
          Platform overview & system monitoring
        </p>
      </div>

      {/* STATS */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <h3>Total Users</h3>
          <p className="stat-value">1,284</p>
          <span className="stat-hint">+42 this month</span>
        </div>

        <div className="admin-stat-card">
          <h3>Photographers</h3>
          <p className="stat-value">342</p>
          <span className="stat-hint">18 pending approval</span>
        </div>

        <div className="admin-stat-card">
          <h3>Active Subscriptions</h3>
          <p className="stat-value">196</p>
          <span className="stat-hint">₹97,804 / month</span>
        </div>

        <div className="admin-stat-card">
          <h3>Platform Activity</h3>
          <p className="stat-value">High</p>
          <span className="stat-hint">Last 24 hours</span>
        </div>
      </div>

      {/* ACTION CARDS */}
      <div className="admin-actions-grid">
        <div className="admin-action-card">
          <h3>Pending Photographer Approvals</h3>
          <p className="muted">
            Review and approve new photographer registrations.
          </p>
          <button className="admin-btn primary">
            Review Applications
          </button>
        </div>

        <div className="admin-action-card">
          <h3>Subscription Management</h3>
          <p className="muted">
            View plans, override access, or resolve billing issues.
          </p>
          <button className="admin-btn">
            Manage Subscriptions
          </button>
        </div>

        <div className="admin-action-card">
          <h3>User Accounts</h3>
          <p className="muted">
            Suspend, verify, or manage platform users.
          </p>
          <button className="admin-btn">
            View Users
          </button>
        </div>
      </div>

      {/* ACTIVITY LOG */}
      <div className="admin-card">
        <h2>Recent Platform Activity</h2>

        <ul className="activity-list">
          <li>
            📸 <strong>Jane Doe</strong> submitted photographer verification
          </li>
          <li>
            💳 Subscription upgraded to <strong>Pro</strong>
          </li>
          <li>
            🚫 User <strong>alex@example.com</strong> suspended
          </li>
          <li>
            🏙️ New city <strong>Jaipur</strong> added
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
