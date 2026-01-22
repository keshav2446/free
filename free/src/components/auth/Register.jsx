import "../../styles/auth.css";

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Photographer Account</h2>
        <p className="auth-subtitle">
          Join a trusted photographers community
        </p>

        <form className="auth-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="City" />
          <input type="password" placeholder="Password" />

          <button type="submit" className="auth-btn">
            Continue to Subscription
          </button>
        </form>

        <p className="auth-footer">
          Already registered? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
