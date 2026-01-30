import { Link } from "react-router-dom";
import "./teamRequirements.css";

const TeamRequirements = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        {/* LEFT CONTENT */}
        <div className="team-left">
          <span className="team-eyebrow">Crew Board</span>

          <h2>
            Find & Join <br />
            <span>Photography Projects</span>
          </h2>

          <p className="team-desc">
            Photographers across India post crew requirements for weddings,
            commercial shoots, pre-weddings, and video projects.
          </p>

          <ul className="team-list">
            <li>✔ Assistant photographers & videographers</li>
            <li>✔ Short-term & project-based work</li>
            <li>✔ Direct contact with photographers</li>
          </ul>

          <Link to="/crew-requirements" className="team-btn">
            View Requirements →
          </Link>
        </div>

        {/* RIGHT VISUAL */}
        <div className="team-right">
          <div className="team-stats">
            <div>
              <strong>120+</strong>
              <span>Active Requirements</span>
            </div>
            <div>
              <strong>300+</strong>
              <span>Photographers</span>
            </div>
            <div>
              <strong>40+</strong>
              <span>Cities</span>
            </div>
          </div>

          <div className="team-tags">
            <span>📸 Assistant</span>
            <span>🎥 Videographer</span>
            <span>🚁 Drone</span>
            <span>💡 Light Man</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamRequirements;
