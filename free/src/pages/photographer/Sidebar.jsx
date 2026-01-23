import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react"; // install if not
import "./Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <aside className="sidebar">
      {/* TOP */}
      <div>
        <div className="sidebar-logo">📷 LensConnect</div>

        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Profile</a>
          <a href="#">Portfolio</a>
          <a href="#">AI Availability</a>
          <a href="#">Subscription</a>
        </nav>
      </div>

      {/* USER SECTION */}
      <div className="sidebar-user-wrapper">
        <div
          className={`sidebar-user ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <div className="avatar">N</div>

          <div className="user-info">
            <strong>Jane Doe</strong>
            <span>jane.doe@example.com</span>
          </div>

          <div className="chevron">
            {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </div>

        {open && (
          <div className="sidebar-dropdown">
            <p className="dropdown-title">My Account</p>
            <a href="#">👤 Profile</a>
            <a href="#">⚙️ Settings</a>
            <button className="logout">🚪 Log out</button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
