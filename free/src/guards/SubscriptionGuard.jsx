import { Navigate } from "react-router-dom";

const SubscriptionGuard = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  if (!user.subscriptionActive) {
    return <Navigate to="/auth/subscription" />;
  }

  return children;
};

export default SubscriptionGuard;
