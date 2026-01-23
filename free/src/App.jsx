import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

/* Public */
import Home from "./pages/home/Home";
import ForPhotographers from "./pages/forPhotographers/ForPhotographers";

/* Auth */
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

/* Photographer */
import PhotographerLayout from "./pages/photographer/PhotographerLayout";
import Dashboard from "./pages/photographer/Dashboard";
import EditProfile from "./pages/photographer/EditProfile";
import Portfolio from "./pages/photographer/Portfolio";
import SubscriptionStatus from "./pages/photographer/SubscriptionStatus";



function App() {
  return (
    <>
      {/* Navbar ONLY for public */}
      <Navbar />

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/for-photographers" element={<ForPhotographers />} />

        {/* Auth */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

        {/* Photographer */}
        <Route path="/photographer" element={<PhotographerLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<EditProfile />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="subscription" element={<SubscriptionStatus />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
