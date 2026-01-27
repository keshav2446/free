import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronUp, ChevronDown } from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = () => {
    // later: clear token
    navigate("/auth/login");
  };

  return (
    <aside className="sidebar">
      {/* TOP */}
      <div>
        {/* <div className="sidebar-logo">📷 LensConnect</div> */}

        

        <nav className="sidebar-nav">
          <NavLink to="/photographer/dashboard">Dashboard</NavLink>
          <NavLink to="/photographer/profile">Profile</NavLink>
          <NavLink to="/photographer/portfolio">Portfolio</NavLink>
          <NavLink to="/photographer/ai-availability">Availability</NavLink>
          <NavLink to="/photographer/subscription">Subscription</NavLink>
          
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

            <NavLink to="/photographer/profile">👤 Profile</NavLink>
            <NavLink to="/photographer/settings">⚙️ Settings</NavLink>

            <button className="logout" onClick={logoutHandler}>
              🚪 Log out
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
