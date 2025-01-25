import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import MenuMobile from "./Sidebar/MenuMobile";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  const isAuthRoute =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="relative text-sm font-normal">
      <div>
        {!isAuthRoute && <Sidebar />}
        <div
          className={`transition-all w-[calc(100vw_-_140px)] ${
            isAuthRoute ? "" : "ms-auto"
          }`}
        >
          <div className="min-h-screen relative">
            <Outlet />
          </div>
          {!isAuthRoute && <Footer />}
          {!isAuthRoute && <MenuMobile />}
        </div>
      </div>
    </div>
  );
};

export default Layout;
