import "./admin.css";

const AdminSubscriptions = () => {
  return (
    <div className="admin-page">
      {/* HEADER */}
      <div className="admin-header">
        <h1>Subscription Management</h1>
        <p className="muted">
          Manage photographer subscriptions and billing status
        </p>
      </div>

      {/* STATS */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <h3>Active Pro Subscriptions</h3>
          <p className="stat-value">196</p>
          <span className="stat-hint">₹499 / year</span>
        </div>

        <div className="admin-stat-card">
          <h3>Total Revenue</h3>
          <p className="stat-value">₹97,804</p>
          <span className="stat-hint">This month</span>
        </div>

        <div className="admin-stat-card">
          <h3>Expired Plans</h3>
          <p className="stat-value">23</p>
          <span className="stat-hint">Need renewal</span>
        </div>
      </div>

      {/* SUBSCRIPTIONS TABLE */}
      <div className="admin-table-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Photographer</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>Expiry Date</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Jane Doe</td>
              <td>Pro</td>
              <td>
                <span className="status active">Active</span>
              </td>
              <td>01 Aug 2024</td>
              <td>01 Aug 2025</td>
              <td>₹499</td>
              <td>
                <button className="admin-btn small danger">
                  Cancel
                </button>
              </td>
            </tr>

            <tr>
              <td>Alex Smith</td>
              <td>Free</td>
              <td>
                <span className="status muted">Inactive</span>
              </td>
              <td>—</td>
              <td>—</td>
              <td>₹0</td>
              <td>
                <button className="admin-btn small primary">
                  Upgrade
                </button>
              </td>
            </tr>

            <tr>
              <td>Rahul Verma</td>
              <td>Pro</td>
              <td>
                <span className="status warning">Expired</span>
              </td>
              <td>10 Jan 2024</td>
              <td>10 Jan 2025</td>
              <td>₹499</td>
              <td>
                <button className="admin-btn small success">
                  Renew
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSubscriptions;
