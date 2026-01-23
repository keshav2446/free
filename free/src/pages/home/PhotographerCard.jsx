import "./PhotographerCard.css";

const PhotographerCard = ({ photographer }) => {
  return (
    <div className="photographer-card">
      <div className="image-wrapper">
        <img src={photographer.image} alt={photographer.name} />
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

        <a href="#" className="view-profile">
          View Profile →
        </a>
      </div>
    </div>
  );
};

export default PhotographerCard;
