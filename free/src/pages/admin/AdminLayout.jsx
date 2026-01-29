import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./admin.css";

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`admin-layout ${collapsed ? "collapsed" : ""}`}>
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="admin-header">
          <h2>{collapsed ? "LC" : "LensConnect"}</h2>

          <button
            className="sidebar-toggle"
            onClick={() => setCollapsed(!collapsed)}
          >
            ☰
          </button>
        </div>

        <p className="admin-role">{collapsed ? "ADMIN" : "ADMIN PANEL"}</p>

        <nav>
          <NavLink to="/admin">
            <span className="nav-icon">📊</span>
            <span className="nav-text">Dashboard</span>
          </NavLink>

          <NavLink to="/admin/photographers">
            <span className="nav-icon">📸</span>
            <span className="nav-text">Photographers</span>
          </NavLink>

          <NavLink to="/admin/users">
            <span className="nav-icon">👤</span>
            <span className="nav-text">Users</span>
          </NavLink>

          <NavLink to="/admin/subscriptions">
            <span className="nav-icon">💳</span>
            <span className="nav-text">Subscriptions</span>
          </NavLink>

          <NavLink to="/admin/settings">
            <span className="nav-icon">⚙️</span>
            <span className="nav-text">Settings</span>
          </NavLink>
        </nav>
      </aside>

      {/* CONTENT */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
