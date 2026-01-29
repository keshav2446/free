import { useState, useRef } from "react";
import "./EditProfile.css";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    bio: "Capturing moments that last a lifetime.",
    experience: 8,
    city: "New York",
    types: "Wedding, Portrait, Events",
    equipment: "Canon EOS R5, RF 24-70mm f/2.8",
  });

  // 🔥 PROFILE PHOTO (FRONTEND ONLY)
  const [profilePhoto, setProfilePhoto] = useState(null);
  const fileInputRef = useRef(null);

  // 🔥 SELLING EQUIPMENT STATE
  const [sellingEquipment, setSellingEquipment] = useState([
    { name: "", price: "", condition: "", description: "" },
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 📸 PHOTO HANDLERS
  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(file);
    }
  };

  const handleSellingChange = (index, field, value) => {
    const updated = [...sellingEquipment];
    updated[index][field] = value;
    setSellingEquipment(updated);
  };

  const addSellingItem = () => {
    setSellingEquipment([
      ...sellingEquipment,
      { name: "", price: "", condition: "", description: "" },
    ]);
  };

  const removeSellingItem = (index) => {
    setSellingEquipment(sellingEquipment.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    const payload = {
      ...formData,
      photo: profilePhoto, // 🔥 backend-ready
      sellingEquipment: sellingEquipment.filter(
        (item) => item.name && item.price
      ),
    };

    console.log("SAVE PROFILE DATA 👉", payload);
    alert("Profile data logged in console (frontend only)");
  };

  return (
    <div className="edit-profile-page">
      <h1>Edit Profile</h1>

      <div className="profile-grid">
        {/* LEFT */}
        <div className="profile-card">
          <h3>Personal Information</h3>
          <p className="muted">Update your personal details</p>

          <div className="avatar-row">
            <div className="avatar-lg">
              {profilePhoto ? (
                <img
                  src={URL.createObjectURL(profilePhoto)}
                  alt="Profile"
                  className="avatar-img"
                />
              ) : (
                "N"
              )}
            </div>

            <button className="secondary-btn" onClick={handlePhotoClick}>
              Change Photo
            </button>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handlePhotoChange}
            />
          </div>

          <label>Full Name</label>
          <input name="name" value={formData.name} onChange={handleChange} />

          <label>Email</label>
          <input value={formData.email} disabled />
        </div>

        {/* RIGHT */}
        <div className="profile-card">
          <h3>Actions</h3>
          <button className="primary-btn full" onClick={handleSave}>
            Save Changes
          </button>
        </div>

        {/* PROFESSIONAL */}
        <div className="profile-card wide">
          <h3>Professional Details</h3>
          <p className="muted">Showcase your expertise</p>

          <label>Bio</label>
          <textarea
            name="bio"
            rows="4"
            value={formData.bio}
            onChange={handleChange}
          />

          <div className="two-col">
            <div>
              <label>Experience (Years)</label>
              <input
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>City</label>
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
          </div>

          <label>Photography Types</label>
          <input
            name="types"
            value={formData.types}
            onChange={handleChange}
          />
          <small>Separate with commas</small>

          <label>Equipment</label>
          <textarea
            name="equipment"
            rows="3"
            value={formData.equipment}
            onChange={handleChange}
          />
        </div>

        {/* 🔥 SELLING EQUIPMENT */}
        <div className="profile-card wide">
          <h3>Selling Equipment</h3>
          <p className="muted">
            Fill details below and click <strong>Save Changes</strong> to add
            items to your public profile
          </p>

          {sellingEquipment.map((item, i) => (
            <div key={i} className="selling-form">
              <div className="two-col">
                <div>
                  <label>Item Name</label>
                  <input
                    value={item.name}
                    onChange={(e) =>
                      handleSellingChange(i, "name", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label>Price</label>
                  <input
                    value={item.price}
                    onChange={(e) =>
                      handleSellingChange(i, "price", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="two-col">
                <div>
                  <label>Condition</label>
                  <input
                    value={item.condition}
                    onChange={(e) =>
                      handleSellingChange(i, "condition", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label>Description</label>
                  <input
                    value={item.description}
                    onChange={(e) =>
                      handleSellingChange(i, "description", e.target.value)
                    }
                  />
                </div>
              </div>

              {sellingEquipment.length > 1 && (
                <button
                  className="danger-btn"
                  onClick={() => removeSellingItem(i)}
                >
                  Remove Item
                </button>
              )}

              <hr />
            </div>
          ))}

          <button className="secondary-btn" onClick={addSellingItem}>
            + Add Another Item
          </button>

          <button
            className="primary-btn full"
            style={{ marginTop: "12px" }}
            onClick={handleSave}
          >
            Save Selling Equipment
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
