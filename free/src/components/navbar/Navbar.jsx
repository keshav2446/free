import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const avatarLetter = user?.name?.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          {/* LOGO */}
          <Link to="/" className="logo">
            📷 <span>LensConnect</span>
          </Link>

          {/* NAV LINKS */}
          <nav className={`nav-links ${open ? "open" : ""}`}>
            <Link to="/">Discover</Link>

            {!user && <Link to="/for-photographers">For Photographers</Link>}

            {!user ? (
              <>
                <Link to="/auth/login" className="login-btn">
                  Log In
                </Link>
                <Link to="/auth/register" className="signup-btn">
                  Sign Up
                </Link>
              </>
            ) : (
              /* USER SECTION */
              <div className="user-area">
                <div
                  className="avatar"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {avatarLetter}
                </div>

                <div className="user-text">
                  <span className="user-email">{user.email}</span>
                  <span
                    className={`badge ${
                      user.subscriptionActive ? "pro" : "free"
                    }`}
                  >
                    {user.subscriptionActive ? "PRO" : "FREE"}
                  </span>
                </div>

                {menuOpen && (
                  <div className="avatar-menu">
                    <p className="avatar-name">{user.name}</p>

                    <Link to="/photographer/dashboard">
                      Dashboard
                    </Link>

                    <Link to="/photographer/profile">
                      Edit Profile
                    </Link>

                    <button onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </nav>

          {/* HAMBURGER */}
          <div
            className={`hamburger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Navbar;
