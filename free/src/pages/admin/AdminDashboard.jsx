import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";
import "./admin.css";

/* MOCK ANALYTICS DATA */
const revenueData = [
  { month: "Aug", revenue: 4200 },
  { month: "Sep", revenue: 72000 },
  { month: "Oct", revenue: 32000 },
  { month: "Nov", revenue: 78000 },
  { month: "Dec", revenue: 97804 },
];

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-page">
      {/* PAGE HEADER */}
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p className="muted">Platform analytics & growth overview</p>
      </div>

      {/* STATS */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <h3>Total Users</h3>
          <p className="stat-value">1,500</p>
          <span className="stat-hint">+42 this month</span>
        </div>

        <div className="admin-stat-card">
          <h3>Active Subscriptions</h3>
          <p className="stat-value">996</p>
          <span className="stat-hint">Pro & Premium</span>
        </div>

        <div className="admin-stat-card">
          <h3>Monthly Revenue</h3>
          <p className="stat-value">₹20,804</p>
          <span className="stat-hint">+18% MoM</span>
        </div>
      </div>

      {/* REVENUE CHART */}
      <div className="admin-card">
        <h2>Revenue Growth</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#696969"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ACTION CARDS */}
      <div className="admin-actions-grid">
        <div className="admin-action-card">
          <h3>Pending Photographer Approvals</h3>
          <p className="muted">
            Review and approve new photographer registrations.
          </p>
          <button
            className="admin-btn primary"
            onClick={() => navigate("/admin/photographers")}
          >
            Review Applications
          </button>
        </div>

        <div className="admin-action-card">
          <h3>Subscription Management</h3>
          <p className="muted">
            Manage plans, override access, resolve billing issues.
          </p>
          <button
            className="admin-btn"
            onClick={() => navigate("/admin/subscriptions")}
          >
            Manage Subscriptions
          </button>
        </div>

        <div className="admin-action-card">
          <h3>Photographer Accounts</h3>
          <p className="muted">
            Suspend, verify, or manage photographers.
          </p>
          <button
            className="admin-btn"
            onClick={() => navigate("/admin/users")}
          >
            View Photographers
          </button>
        </div>
      </div>

      {/* ACTIVITY LOG */}
      <div className="admin-card">
        <h2>Recent Platform Activity</h2>

        <ul className="activity-list">
          <li>
            📸 <strong>Keshav Singh</strong> submitted photographer verification
          </li>
          <li>
            💳 Subscription upgraded to <strong>Pro</strong>
          </li>
          <li>
            🚫 User <strong>vishnuverma@gmail.com</strong> suspended
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
