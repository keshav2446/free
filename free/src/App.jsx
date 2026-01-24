import { Routes, Route } from "react-router-dom";

/* Public */
import Home from "./pages/home/Home";
import ForPhotographers from "./pages/forPhotographers/ForPhotographers";
import Navbar from "./components/navbar/Navbar";

/* Auth */
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

/* Photographer */
import PhotographerLayout from "./pages/photographer/PhotographerLayout";
import Dashboard from "./pages/photographer/Dashboard";
import EditProfile from "./pages/photographer/EditProfile";
import Portfolio from "./pages/photographer/Portfolio";
import SubscriptionStatus from "./pages/photographer/SubscriptionStatus";
import AIAvailability from "./pages/photographer/AIAvailability";

/* Admin */
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPhotographers from "./pages/admin/AdminPhotographers";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminSubscriptions from "./pages/admin/AdminSubscriptions";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminGuard from "./pages/admin/AdminGuard";

import PendingApproval from "./components/auth/PendingApproval";


function App() {
  return (
    <Routes>
      {/* PUBLIC (WITH NAVBAR) */}
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/for-photographers" element={<ForPhotographers />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>

      {/* PHOTOGRAPHER (NO NAVBAR) */}
      <Route path="/photographer" element={<PhotographerLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<EditProfile />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="subscription" element={<SubscriptionStatus />} />
        <Route path="ai-availability" element={<AIAvailability />} />
      </Route>

      <Route path="/auth/pending-approval" element={<PendingApproval />} />


      {/* ADMIN (NO NAVBAR, PROTECTED) */}
      <Route
        path="/admin"
        element={
          <AdminGuard>
            <AdminLayout />
          </AdminGuard>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="photographers" element={<AdminPhotographers />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="subscriptions" element={<AdminSubscriptions />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  );
}

export default App;
