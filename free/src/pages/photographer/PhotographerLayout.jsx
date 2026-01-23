import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./PhotographerLayout.css";

const PhotographerLayout = () => {
  return (
    <div className="photographer-layout">
      <Sidebar />

      <div className="photographer-main">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default PhotographerLayout;
