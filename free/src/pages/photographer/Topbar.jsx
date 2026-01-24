import { useNavigate } from "react-router-dom";
import "./Topbar.css";

const Topbar = () => {
  const navigate = useNavigate();

  const handleViewPublic = () => {
    // ✅ Redirect to homepage WITHOUT logout
    navigate("/");
  };

  return (
    <div className="topbar">
      <button
        className="public-btn"
        onClick={handleViewPublic}
      >
        View Public Site
      </button>
    </div>
  );
};

export default Topbar;
