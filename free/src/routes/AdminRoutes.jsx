import { Route } from "react-router-dom";
import AdminGuard from "../admin/AdminGuard";
import AdminLayout from "../admin/AdminLayout";

import AdminDashboard from "../admin/AdminDashboard";
import AdminPhotographers from "../admin/AdminPhotographers";
import AdminUsers from "../admin/AdminUsers";
import AdminSubscriptions from "../admin/AdminSubscriptions";
import AdminSettings from "../admin/AdminSettings";

const AdminRoutes = () => {
  return (
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
  );
};

export default AdminRoutes;
