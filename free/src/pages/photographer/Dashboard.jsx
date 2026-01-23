import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-content">
      <h1>Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <p>Total Earnings</p>
          <h2>₹1,25,000</h2>
          <span>+12% from last month</span>
        </div>

        <div className="stat-card">
          <p>Upcoming Bookings</p>
          <h2>8</h2>
          <span>+2 from last month</span>
        </div>

        <div className="stat-card">
          <p>Profile Views</p>
          <h2>2,430</h2>
          <span>+25% from last month</span>
        </div>
      </div>

      <div className="dashboard-bottom">
        <div className="box">
          <h3>Recent Bookings</h3>
          <p>No recent bookings to display.</p>
        </div>

        <div className="box">
          <h3>Notifications</h3>
          <p>You’re all caught up!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
