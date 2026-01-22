import "../../styles/photographer.css";

const EditProfile = () => {
  return (
    <div className="page">
      <h1 className="page-title">Edit Profile</h1>

      <div className="card form-card">
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Photography Type (Wedding, Event...)" />
        <input type="number" placeholder="Experience (years)" />
        <textarea placeholder="About yourself"></textarea>

        <button className="primary-btn">Save Changes</button>
      </div>
    </div>
  );
};

export default EditProfile;
