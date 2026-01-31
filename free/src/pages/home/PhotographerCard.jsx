import { useNavigate } from "react-router-dom";
import "./PhotographerCard.css";

const PhotographerCard = ({ photographer }) => {
  const navigate = useNavigate();

  const openProfile = () => {
    navigate(`/photographers/${photographer.username}`);
  };

  return (
    <div className="photographer-card">
      
      {/* IMAGE CLICKABLE */}
      <div className="image-wrapper" onClick={openProfile}>
        <img
          src={photographer.image}
          alt={photographer.name}
        />
        <span className="rating">⭐ {photographer.rating}</span>
      </div>

      <div className="card-content">
        <h3>{photographer.name}</h3>
        <p className="location">📍 {photographer.city}</p>

        <div className="tags">
          {photographer.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>

        {/* BUTTON STILL WORKS */}
        <button
          className="view-profile"
          onClick={openProfile}
        >
          View Profile →
        </button>
      </div>
    </div>
  );
};

export default PhotographerCard;
