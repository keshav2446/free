import "../../styles/photographer.css";

const Community = () => {
  return (
    <div className="page">
      <h1 className="page-title">Photographer Community</h1>

      <div className="grid">
        {[1, 2, 3, 4].map((item) => (
          <div className="card profile-card" key={item}>
            <div className="avatar"></div>
            <h3>Photographer Name</h3>
            <p>Wedding • Delhi</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
