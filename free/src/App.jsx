import { Routes, Route } from "react-router-dom";

/* Auth */
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Subscription from "./components/auth/Subscription";

/* Public */
import Home from "./pages/home/Home";
import ForPhotographers from "./pages/forPhotographers/ForPhotographers";
import Navbar from "./components/navbar/Navbar";

/* Dashboard */
import Dashboard from "./pages/photographer/Dashboard";
import EditProfile from "./pages/photographer/EditProfile";
import Community from "./pages/photographer/Community";
import SubscriptionStatus from "./pages/photographer/SubscriptionStatus";

function App() {
  return (
    <Routes>
      {/* 🌐 PUBLIC WITH NAVBAR */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

      <Route
        path="/for-photographers"
        element={
          <>
            <Navbar />
            <ForPhotographers />
          </>
        }
      />

      {/* 🔐 AUTH */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/subscription" element={<Subscription />} />

      {/* 📸 DASHBOARD (NO NAVBAR) */}
      <Route path="/photographer/dashboard" element={<Dashboard />} />
      <Route path="/photographer/edit-profile" element={<EditProfile />} />
      <Route path="/photographer/community" element={<Community />} />
      <Route
        path="/photographer/subscription"
        element={<SubscriptionStatus />}
      />

      {/* 404 */}
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  );
}

export default App;
