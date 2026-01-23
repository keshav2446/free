import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h3>📷 LensConnect</h3>
          <p>
            Connecting talented photographers with clients worldwide.
          </p>

          <div className="social-icons">
            <span>🐦</span>
            <span>📸</span>
            <span>💼</span>
          </div>
        </div>

        {/* Platform */}
        <div className="footer-column">
          <h4>Platform</h4>
          <a href="#">Discover</a>
          <a href="#">For Photographers</a>
          <a href="#">Pricing</a>
          <a href="#">About Us</a>
        </div>

        {/* Community */}
        <div className="footer-column">
          <h4>Community</h4>
          <a href="#">Blog</a>
          <a href="#">Forum</a>
          <a href="#">Events</a>
          <a href="#">Help Center</a>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 LensConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
