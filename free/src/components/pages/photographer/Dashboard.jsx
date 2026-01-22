import "../../styles/photographer.css";

const Dashboard = () => {
  return (
    <div className="page">
      <h1 className="page-title">Dashboard</h1>

      <div className="grid">
        <div className="card">
          <h3>Profile Status</h3>
          <p className="status pending">Pending Approval</p>
        </div>

        <div className="card">
          <h3>Subscription</h3>
          <p>Active • Valid till Jan 2027</p>
        </div>

        <div className="card">
          <h3>Portfolio</h3>
          <p>Upload & manage your work</p>
        </div>

        <div className="card">
          <h3>Community</h3>
          <p>Explore photographers in other cities</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
