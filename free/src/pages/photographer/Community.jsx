const Community = () => {
  return (
    <div style={{ padding: "40px", color: "#fff" }}>
      <h1>Photographer Community</h1>
      <p style={{ color: "#9ca3af", marginBottom: "30px" }}>
        Discover and connect with photographers from different cities.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            style={{
              background: "#111827",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "#020617",
                marginBottom: "12px",
              }}
            ></div>
            <h3>Photographer Name</h3>
            <p style={{ color: "#9ca3af" }}>Wedding • Delhi</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
