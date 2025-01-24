import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MenuMobile from "./Sidebar/MenuMobile";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen justify-between p-4 md:p-0">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="flex flex-col flex-1 w-full mx-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
      <MenuMobile />
    </div>
  );
};

export default Layout;
