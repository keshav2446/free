const SubscriptionStatus = () => {
  return (
    <div
      style={{
        padding: "40px",
        color: "#fff",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <h1>Subscription Status</h1>

      <div
        style={{
          background: "#111827",
          borderRadius: "12px",
          padding: "24px",
          marginTop: "20px",
        }}
      >
        <h2 style={{ color: "#38bdf8", marginBottom: "10px" }}>
          ₹499 / Year
        </h2>

        <p>
          Status:{" "}
          <span style={{ color: "#22c55e", fontWeight: "bold" }}>
            Active
          </span>
        </p>

        <p style={{ color: "#9ca3af", marginTop: "6px" }}>
          Valid till: January 2027
        </p>

        <button style={{ ...buttonStyle, marginTop: "20px" }}>
          Renew Subscription
        </button>
      </div>
    </div>
  );
};

/* ✅ BUTTON STYLE DEFINED */
const buttonStyle = {
  padding: "12px 16px",
  borderRadius: "8px",
  background: "#38bdf8",
  color: "#020617",
  border: "none",
  fontSize: "14px",
  fontWeight: "600",
  cursor: "pointer",
};

export default SubscriptionStatus;
