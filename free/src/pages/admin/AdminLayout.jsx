import { Outlet, NavLink } from "react-router-dom";
import "./admin.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2>LensConnect</h2>
        <p className="admin-role">ADMIN PANEL</p>

        <nav>
          <NavLink to="/admin">Dashboard</NavLink>
          <NavLink to="/admin/photographers">Photographers</NavLink>
          <NavLink to="/admin/users">Users</NavLink>
          <NavLink to="/admin/subscriptions">Subscriptions</NavLink>
          <NavLink to="/admin/settings">Settings</NavLink>
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
