import { useNavigate } from "react-router-dom";
import "../../styles/auth.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔐 Abhi dummy login
    // Baad me yahin Firebase auth lagega

    navigate("/photographer/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Photographer Login</h2>
        <p className="auth-subtitle">
          Access your verified photographer account
        </p>

        <form className="auth-form" onSubmit={handleLogin}>
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-footer">
          New photographer?{" "}
          <span
            style={{ cursor: "pointer", color: "#0ea5e9" }}
            onClick={() => navigate("/auth/register")}
          >
            Create account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
