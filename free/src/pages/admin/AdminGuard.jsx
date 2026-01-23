import { Navigate } from "react-router-dom";

/**
 * TEMP MOCK
 * Later: replace with real auth (Firebase / JWT)
 */
const getCurrentUser = () => {
  return {
    role: "admin", // change to "user" to test block
  };
};

const AdminGuard = ({ children }) => {
  const user = getCurrentUser();

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminGuard;
