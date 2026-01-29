import { Link } from "react-router-dom";
import "./equipmentMarketplace.css";

const EquipmentMarketplace = () => {
  return (
    <section className="equipment-marketplace">
      <div className="marketplace-container">
        {/* LEFT CONTENT */}
        <div className="marketplace-left">
          <span className="marketplace-eyebrow">Marketplace</span>

          <h2>
            Buy Professional <br />
            <span>Photography Equipment</span>
          </h2>

          <p className="marketplace-desc">
            Explore cameras, lenses, and accessories listed by verified
            photographers across India.
          </p>

          <ul className="marketplace-list">
            <li>✔ Trusted photographer sellers</li>
            <li>✔ Well-maintained & quality-checked gear</li>
            <li>✔ Direct communication with sellers</li>
          </ul>

          <Link to="/marketplace" className="marketplace-btn">
            Browse Equipment →
          </Link>
        </div>

        {/* RIGHT VISUAL */}
        <div className="marketplace-right">
          <div className="marketplace-stats">
            <div>
              <strong>500+</strong>
              <span>Listings</span>
            </div>
            <div>
              <strong>200+</strong>
              <span>Photographers</span>
            </div>
            <div>
              <strong>50+</strong>
              <span>Cities</span>
            </div>
          </div>

          <div className="marketplace-tags">
            <span>📷 Cameras</span>
            <span>🔍 Lenses</span>
            <span>🎒 Accessories</span>
            <span>🎥 Video Gear</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentMarketplace;
