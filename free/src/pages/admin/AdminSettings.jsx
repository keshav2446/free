import "./admin.css";

const AdminSettings = () => {
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Platform Settings</h1>
        <p className="muted">
          Manage global platform configurations
        </p>
      </div>

      <div className="admin-card">
        <h3>General Settings</h3>

        <div className="form-group">
          <label>Platform Name</label>
          <input type="text" defaultValue="LensConnect" />
        </div>

        <div className="form-group">
          <label>Default Subscription Plan</label>
          <select>
            <option>Free</option>
            <option selected>Pro</option>
          </select>
        </div>

        <div className="form-group">
          <label>Auto-Approve Photographers</label>
          <select>
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <button className="admin-btn primary">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;
