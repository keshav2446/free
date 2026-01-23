import { useNavigate } from "react-router-dom";
import "../../styles/auth.css";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // 🔐 Later yahin Firebase register logic aayega
    // Abhi direct subscription page par bhej rahe hain

    navigate("/auth/subscription");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Photographer Account</h2>
        <p className="auth-subtitle">
          Join a trusted photographers community
        </p>

        <form className="auth-form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email address"
            required
          />

          <input
            type="text"
            placeholder="City"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <button type="submit" className="auth-btn">
            Continue to Subscription
          </button>
        </form>

        <p className="auth-footer">
          Already registered?{" "}
          <span onClick={() => navigate("/auth/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
