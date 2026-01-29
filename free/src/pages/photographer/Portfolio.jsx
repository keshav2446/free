import { useRef, useState } from "react";
import "./Portfolio.css";

/* ============================
   YOUTUBE THUMBNAIL EXTRACTOR
============================ */
const getYoutubeThumbnail = (url) => {
  if (!url) return null;

  let videoId = null;

  try {
    // youtube.com/watch?v=
    if (url.includes("youtube.com/watch")) {
      const params = new URL(url).searchParams;
      videoId = params.get("v");
    }

    // youtu.be/
    if (url.includes("youtu.be")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0];
    }

    // youtube shorts
    if (url.includes("youtube.com/shorts")) {
      videoId = url.split("shorts/")[1]?.split("?")[0];
    }
  } catch {
    return null;
  }

  // ✅ mqdefault is more reliable than hqdefault
  return videoId
    ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
    : null;
};

const FALLBACK_THUMB =
  "https://cdn-icons-png.flaticon.com/512/1179/1179120.png";

const Portfolio = () => {
  const fileInputRef = useRef(null);

  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  ]);

  const [videos, setVideos] = useState([]);
  const [videoLink, setVideoLink] = useState("");

  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  const handleFiles = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
  };

  /* ============================
     ADD VIDEO
  ============================ */
  const addVideo = () => {
    if (!videoLink.trim()) return;

    const thumbnail = getYoutubeThumbnail(videoLink) || FALLBACK_THUMB;

    setVideos((prev) => [
      ...prev,
      {
        url: videoLink,
        thumbnail,
      },
    ]);

    setVideoLink("");
  };

  const deleteVideo = (index) => {
    setVideos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="portfolio-page">
      <div className="portfolio-header">
        <h1>Manage Portfolio</h1>
      </div>

      {/* ================= IMAGE UPLOAD ================= */}
      <div className="portfolio-card">
        <h2>Upload Photos</h2>
        <p className="muted-text">
          Add images to your photography portfolio.
        </p>

        <div className="upload-dropzone" onClick={openFilePicker}>
          <div className="upload-icon">⬆️</div>
          <p className="upload-text">
            Drag & drop or <span>browse</span>
          </p>

          <button
            className="upload-btn"
            onClick={(e) => {
              e.stopPropagation();
              openFilePicker();
            }}
          >
            Select Images
          </button>

          <input
            type="file"
            multiple
            hidden
            ref={fileInputRef}
            accept="image/*"
            onChange={handleFiles}
          />
        </div>
      </div>

      {/* ================= VIDEO PORTFOLIO ================= */}
      <div className="portfolio-card">
        <h2>Video Portfolio</h2>
        <p className="muted-text">
          Add YouTube or Drive video links to showcase your work.
        </p>

        <div className="video-input">
          <input
            type="text"
            placeholder="Paste video link (YouTube / Drive)"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
          />
          <button className="upload-btn" onClick={addVideo}>
            Add Video
          </button>
        </div>

        {videos.length === 0 ? (
          <div className="empty-gallery">
            No videos yet. Add your first video 🎥
          </div>
        ) : (
          <div className="gallery-grid">
            {videos.map((vid, index) => (
              <div className="gallery-item" key={index}>
                <img
                  src={vid.thumbnail}
                  alt="video thumbnail"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = FALLBACK_THUMB;
                  }}
                />

                <div className="video-badge">▶</div>

                <div className="gallery-overlay">
                  <button
                    className="view-btn"
                    onClick={() => window.open(vid.url, "_blank")}
                  >
                    Watch
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteVideo(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= PHOTO GALLERY ================= */}
      <div className="portfolio-card">
        <h2>Your Photo Gallery</h2>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt="portfolio" />

              <div className="gallery-overlay">
                <button
                  className="view-btn"
                  onClick={() => window.open(img, "_blank")}
                >
                  View
                </button>
                <button
                  className="delete-btn"
                  onClick={() =>
                    setImages(images.filter((_, i) => i !== index))
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
