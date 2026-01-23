import { useState } from "react";

/*
  USER ROLES:
  - user
  - photographer
  - admin
*/

export const useAuth = () => {
  // 🔥 TEMP MOCK (later from backend)
  const [user] = useState({
    id: "admin_123",
    name: "Super Admin",
    role: "admin", // change to "user" to test block
  });

  const isAuthenticated = !!user;
  const isAdmin = user?.role === "admin";

  return {
    user,
    isAuthenticated,
    isAdmin,
  };
};
