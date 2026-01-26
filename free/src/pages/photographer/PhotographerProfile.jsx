import { useParams } from "react-router-dom";
import "./PhotographerProfile.css";

/* Dummy data (later backend / firebase) */
const mockPortfolioData = {
  vishu: {
    name: "Vishu",
    city: "Lahore",
    rating: 4.9,
    reviews: 124,
    experience: "6 years",
    tags: ["Wedding", "Portrait"],
    about: "Wedding & portrait photographer capturing timeless moments.",
    equipment: [
      "Canon EOS R5",
      "Canon RF 24-70mm f/2.8",
      "Profoto A1X",
    ],
    images: [
      "/images/vishu.jpeg",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    ],
    videos: [
      {
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      },
    ],
  },
};

const PhotographerProfile = () => {
  const { username } = useParams();
  const data = mockPortfolioData[username];

  if (!data) {
    return <div className="profile-not-found">Profile not found</div>;
  }

  return (
    <div className="public-profile-page">
      <div className="profile-container">
        {/* TOP SECTION */}
        <div className="profile-top">
          {/* LEFT */}
          <div className="profile-left">
            {/* PROFILE CARD */}
            <div className="profile-card">
              <img
                className="profile-avatar"
                src={data.images[0]}
                alt={data.name}
              />

              <div className="profile-info">
                <h1>{data.name}</h1>

                <div className="meta">
                  <span>📍 {data.city}</span>
                  <span>⭐ {data.rating} ({data.reviews} reviews)</span>
                  <span>🕒 {data.experience}</span>
                </div>

                <div className="tags">
                  {data.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>

                <p className="about">{data.about}</p>
              </div>
            </div>

            {/* PORTFOLIO */}
            <div className="portfolio-section">
              <h2>Portfolio</h2>

              {/* IMAGES */}
              <h3 className="portfolio-subtitle">Photos</h3>
              <div className="gallery-grid">
                {data.images.map((img, i) => (
                  <div className="gallery-item" key={i}>
                    <img src={img} alt="portfolio" />
                  </div>
                ))}
              </div>

              {/* VIDEOS */}
              <h3 className="portfolio-subtitle">Videos</h3>
              <div className="gallery-grid">
                {data.videos.map((vid, i) => (
                  <div className="gallery-item" key={`v-${i}`}>
                    <img src={vid.thumbnail} alt="video" />
                    <div className="video-badge">▶</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="profile-right">
            {/* BOOKING */}
            <div className="booking-card">
              <h3>Book Now</h3>
              <button className="primary-btn">
                📅 Check Availability
              </button>
              <button className="secondary-btn">✉ Contact</button>
              <p className="hint">
                Contact info visible to logged-in users
              </p>
            </div>

            {/* EQUIPMENT */}
            <div className="equipment-card">
              <h3>Equipment</h3>
              <ul>
                {data.equipment.map((item, i) => (
                  <li key={i}>📷 {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographerProfile;
