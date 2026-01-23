import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo">
          📷 <span>LensConnect</span>
        </Link>

        {/* Desktop + Mobile Links */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>
            Discover
          </Link>

          <Link to="/for-photographers" onClick={() => setOpen(false)}>
            For Photographers
          </Link>

          <Link
            to="/auth/login"
            className="login-btn"
            onClick={() => setOpen(false)}
          >
            Log In
          </Link>

          <Link
            to="/auth/register"
            className="signup-btn"
            onClick={() => setOpen(false)}
          >
            Sign Up
          </Link>
        </nav>

        {/* Hamburger */}
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
  );
};

export default Navbar;
