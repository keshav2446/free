import { Routes, Route, Navigate } from "react-router-dom";

/* Auth */
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Subscription from "./components/auth/Subscription";

/* Photographer Pages */
import Dashboard from "./pages/photographer/Dashboard";
import EditProfile from "./pages/photographer/EditProfile";
import Community from "./pages/photographer/Community";
import SubscriptionStatus from "./pages/photographer/SubscriptionStatus";

function App() {
  return (
    <Routes>
      {/* Default */}
      <Route path="/" element={<Navigate to="/auth/login" />} />

      {/* Auth */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/subscription" element={<Subscription />} />

      {/* Photographer */}
      <Route path="/photographer/dashboard" element={<Dashboard />} />
      <Route path="/photographer/edit-profile" element={<EditProfile />} />
      <Route path="/photographer/community" element={<Community />} />
      <Route
        path="/photographer/subscription"
        element={<SubscriptionStatus />}
      />

      {/* 404 */}
      <Route path="*" element={<h2 style={{ color: "#fff" }}>Page Not Found</h2>} />
    </Routes>
  );
}

export default App;
