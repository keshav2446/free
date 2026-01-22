const EditProfile = () => {
  return (
    <div style={{ padding: "40px", color: "#fff", maxWidth: "600px" }}>
      <h1>Edit Profile</h1>
      <p style={{ color: "#9ca3af", marginBottom: "20px" }}>
        Complete your professional profile for verification.
      </p>

      <input
        type="text"
        placeholder="Full Name"
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="City"
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Photography Type (Wedding, Event...)"
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="Experience (years)"
        style={inputStyle}
      />
      <textarea
        placeholder="About yourself"
        style={{ ...inputStyle, height: "100px" }}
      />

      <button style={buttonStyle}>Save Profile</button>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "14px",
  borderRadius: "8px",
  background: "#020617",
  border: "1px solid #1f2933",
  color: "#fff",
};

const buttonStyle = {
  marginTop: "10px",
  padding: "12px",
  borderRadius: "8px",
  background: "#38bdf8",
  color: "#000",
  border: "none",
  cursor: "pointer",
};

export default EditProfile;
