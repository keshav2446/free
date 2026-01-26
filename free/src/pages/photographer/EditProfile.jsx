import { useState } from "react";
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            <div className="avatar-lg">N</div>
            <button className="secondary-btn">Change Photo</button>
          </div>

          <label>Full Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email</label>
          <input value={formData.email} disabled />
        </div>

        {/* RIGHT */}
        <div className="profile-card">
          <h3>Actions</h3>
          <button className="primary-btn full">Save Changes</button>
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
      </div>
    </div>
  );
};

export default EditProfile;
