import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./PhotographerProfile.css";

/* ================= MOCK DATA (API REPLACE LATER) ================= */
const mockPortfolioData = {
  vishu: {
    id: "user_123",
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

    sellingEquipment: [
      {
        id: "sell_1",
        name: "Canon EOS 5D Mark IV",
        price: "₹3,20,000",
        condition: "Used - Excellent",
        description: "Well maintained, shutter count 45k",
      },
      {
        id: "sell_2",
        name: "Sigma 35mm f/1.4 Art",
        price: "₹1,20,000",
        condition: "Used - Good",
        description: "No fungus, clean glass",
      },
    ],

    images: [
      "/images/vishu.jpeg",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    ],

    videos: [
      {
        thumbnail:
          "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
    ],
  },
};

/* ================= COMPONENT ================= */
const PhotographerProfile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const data = mockPortfolioData[username];

  const [lightbox, setLightbox] = useState(null);
  const [sellIndex, setSellIndex] = useState(0);

  const [contactContext, setContactContext] = useState(null);
  const [messageText, setMessageText] = useState("");

  const isLoggedIn = true; // 🔥 backend se replace hoga

  if (!data) {
    return (
      <div className="public-profile-page">
        <div className="public-profile-not-found">
          Profile not found
        </div>
      </div>
    );
  }

  const currentItem = data.sellingEquipment?.[sellIndex];

  /* ================= HANDLERS ================= */

  const handleAvailability = () => {
    navigate(`/photographers/${username}/availability`);
  };

  const openContact = (context) => {
    if (!isLoggedIn) {
      navigate("/auth/login");
      return;
    }
    setContactContext(context);
  };

  const sendMessage = () => {
    if (!messageText.trim()) return;

    /* 🔥 BACKEND READY PAYLOAD */
    const payload = {
      toUserId: data.id,
      message: messageText,
      context: contactContext.type, // profile | equipment
      referenceId: contactContext.referenceId || null,
    };

    console.log("SEND MESSAGE PAYLOAD 👉", payload);

    setMessageText("");
    setContactContext(null);
    alert("Message sent (frontend demo)");
  };

  return (
    <div className="public-profile-page">
      <div className="public-profile-container">
        <div className="profile-top">

          {/* ================= LEFT ================= */}
          <div className="profile-left">
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
                  <span>⭐ {data.rating} ({data.reviews})</span>
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

              <h3 className="portfolio-subtitle">Photos</h3>
              <div className="gallery-grid">
                {data.images.map((img, i) => (
                  <div
                    key={i}
                    className="gallery-item clickable"
                    onClick={() =>
                      setLightbox({ type: "image", src: img })
                    }
                  >
                    <img src={img} alt="portfolio" />
                  </div>
                ))}
              </div>

              <h3 className="portfolio-subtitle">Videos</h3>
              <div className="gallery-grid">
                {data.videos.map((vid, i) => (
                  <div
                    key={i}
                    className="gallery-item clickable"
                    onClick={() =>
                      setLightbox({ type: "video", src: vid.url })
                    }
                  >
                    <img src={vid.thumbnail} alt="video" />
                    <div className="video-badge">▶</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="profile-right">
            <div className="booking-card">
              <h3>Book Now</h3>

              <button className="primary-btn" onClick={handleAvailability}>
                📅 Check Availability
              </button>

              <button
                className="secondary-btn"
                onClick={() =>
                  openContact({ type: "profile" })
                }
              >
                ✉ Contact
              </button>

              <p className="hint">Contact available after login</p>
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

            {/* SELLING EQUIPMENT */}
            {currentItem && (
              <div className="selling-equipment-card">
                <div className="selling-header">
                  <h3>Equipment for Sale</h3>

                  <div className="selling-arrows">
                    <button
                      disabled={sellIndex === 0}
                      onClick={() => setSellIndex(sellIndex - 1)}
                    >
                      ◀
                    </button>
                    <button
                      disabled={
                        sellIndex === data.sellingEquipment.length - 1
                      }
                      onClick={() => setSellIndex(sellIndex + 1)}
                    >
                      ▶
                    </button>
                  </div>
                </div>

                <div className="selling-item">
                  <h4>📷 {currentItem.name}</h4>
                  <p className="price">💰 {currentItem.price}</p>
                  <p className="condition">
                    📦 {currentItem.condition}
                  </p>
                  <p className="desc">{currentItem.description}</p>
                </div>

                <button
                  className="secondary-btn"
                  onClick={() =>
                    openContact({
                      type: "equipment",
                      referenceId: currentItem.id,
                    })
                  }
                >
                  ✉ Contact Seller
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= MESSAGE MODAL ================= */}
      {contactContext && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Send Message</h3>

            <textarea
              placeholder="Write your message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />

            <div className="modal-actions">
              <button className="primary-btn" onClick={sendMessage}>
                Send
              </button>
              <button
                className="secondary-btn"
                onClick={() => setContactContext(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= LIGHTBOX ================= */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.type === "image" ? (
              <img src={lightbox.src} alt="preview" />
            ) : (
              <iframe
                src={lightbox.src.replace("watch?v=", "embed/")}
                title="video"
                frameBorder="0"
                allowFullScreen
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotographerProfile;
