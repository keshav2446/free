import { useEffect, useState } from "react";
import "./admin.css";

const AdminSettings = () => {
  // 🌙 GLOBAL THEME STATE
  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark")
  );

  // 🌙 APPLY THEME
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Platform Settings</h1>
        <p className="muted">Manage global platform configurations</p>
      </div>

      {/* 🌙 THEME TOGGLE CARD */}
      <div className="admin-card settings-card">
        <h3>Appearance</h3>

        <p className="muted">
          Control how the admin panel
        </p>

        <button
          className="admin-btn primary"
          style={{ marginTop: "12px" }}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Switch to Light Mode" : "🌙 Switch to Dark Mode"}
        </button>
      </div>

      {/* ⚙️ GENERAL SETTINGS */}
      <div className="admin-card settings-card">
        <h3>General Settings</h3>

        <div className="form-group">
          <label>Platform Name</label>
          <input type="text" defaultValue="LensConnect" />
        </div>

        <div className="form-group">
          <label>Default Subscription Plan</label>
          <select defaultValue="Pro">
            <option value="Free">Free</option>
            <option value="Pro">Pro</option>
          </select>
        </div>

        <div className="form-group">
          <label>Auto-Approve Photographers</label>
          <select defaultValue="No">
            <option value="No">No</option>
            <option value="Yes">Yes</option>
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
