import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MenuMobile from "./Sidebar/MenuMobile";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="flex-1 h-full overflow-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
      <MenuMobile />
    </div>
  );
};

export default Layout;
