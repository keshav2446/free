import { useRef, useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const fileInputRef = useRef(null);

  // TEMP images (baad me backend / firebase se aayengi)
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    "https://images.unsplash.com/photo-1519741497674-611481863552",
    "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
    "https://images.unsplash.com/photo-1521334884684-d80222895322",
  ]);

  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  const handleFiles = (e) => {
    const files = Array.from(e.target.files);
    console.log("Selected files:", files);

    // future:
    // upload to backend / firebase
  };

  const deleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="portfolio-page">
      {/* PAGE HEADER */}
      <div className="portfolio-header">
        <h1>Manage Portfolio</h1>
      </div>

      {/* ================= UPLOAD CARD ================= */}
      <div className="portfolio-card">
        <h2>Upload New Images</h2>
        <p className="muted-text">
          Add new photos to your portfolio. Drag and drop or click to upload.
        </p>

        <div className="upload-dropzone" onClick={openFilePicker}>
          <div className="upload-icon">⬆️</div>

          <p className="upload-text">
            Drag & drop files here, or <span>click to browse</span>
          </p>

          <p className="upload-hint">PNG, JPG, GIF up to 10MB</p>

          <button
            className="upload-btn"
            onClick={(e) => {
              e.stopPropagation(); // 🔥 prevents double click
              openFilePicker();
            }}
          >
            Select Files
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

      {/* ================= GALLERY ================= */}
      <div className="portfolio-card">
        <h2>Your Gallery</h2>
        <p className="muted-text">
          Here are the current images in your portfolio.
        </p>

        {images.length === 0 ? (
          <div className="empty-gallery">
            No images yet. Upload your first photo 📸
          </div>
        ) : (
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
                    onClick={() => deleteImage(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
