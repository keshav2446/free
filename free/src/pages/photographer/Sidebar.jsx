import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronUp, ChevronDown, Menu } from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/auth/login");
  };

  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
      {/* TOP */}
      <div>
        {/* TOGGLE BUTTON */}
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={20} />
        </button>

        <nav className="sidebar-nav">
          <NavLink to="/photographer/dashboard">
            <img src="/images/icons/dashboard.png" alt="Dashboard" />
            {sidebarOpen && <span>Dashboard</span>}
          </NavLink>

          <NavLink to="/photographer/profile">
            <img src="/images/icons/user.png" alt="Profile" />
            {sidebarOpen && <span>Profile</span>}
          </NavLink>

          <NavLink to="/photographer/portfolio">
            <img src="/images/icons/portfolio.png" alt="Portfolio" />
            {sidebarOpen && <span>Portfolio</span>}
          </NavLink>

          <NavLink to="/photographer/messages">
  <img src="/images/icons/message.png" alt="Messages" />
  {sidebarOpen && <span>Messages</span>}
</NavLink>


          <NavLink to="/photographer/ai-availability">
            <img src="/images/icons/google.png" alt="Availability" />
            {sidebarOpen && <span>Availability</span>}
          </NavLink>

          <NavLink to="/photographer/subscription">
            <img src="/images/icons/subscription.png" alt="Subscription" />
            {sidebarOpen && <span>Subscription</span>}
          </NavLink>
        </nav>
      </div>

      {/* USER SECTION */}
      <div className="sidebar-user-wrapper">
        <div
          className="sidebar-user"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className="avatar">N</div>

          {/* {sidebarOpen && (
            <div className="user-info">
              <strong>Jane Doe</strong>
              <span>jane.doe@example.com</span>
            </div>
          )} */}

          {sidebarOpen && (
            <div className="chevron">
              {dropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          )}
        </div>

        {dropdownOpen && sidebarOpen && (
          <div className="sidebar-dropdown">
            <p className="dropdown-title">My Account</p>

            <NavLink to="/photographer/profile">Profile</NavLink>
            <NavLink to="/photographer/settings">Settings</NavLink>

            <button className="logout" onClick={logoutHandler}>
              Log out
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
