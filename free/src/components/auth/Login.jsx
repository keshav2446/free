import "../../styles/auth.css";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Photographer Login</h2>
        <p className="auth-subtitle">
          Access your verified photographer account
        </p>

        <form className="auth-form">
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-footer">
          New photographer? <span>Create account</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
