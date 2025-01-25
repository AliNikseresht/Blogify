import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { layoutData } from "../data/layout";

const Sidebar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const hideSidebarPaths = ["/login", "/register"];
  const shouldHideSidebar = hideSidebarPaths.includes(location.pathname);

  const handleUserIconClick = () => {
    setShowUserMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !event.composedPath().includes(menuRef.current)
      ) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCloseMenu = () => {
    setShowUserMenu(false);
  };

  if (shouldHideSidebar) {
    return null;
  }

  return (
    <div className="sidebar fixed start-0 top-0 w-[240px] z-50 transition-all">
      <div className="w-[7.5rem] border-r border-green hidden md:flex flex-col items-center justify-between py-[6.5em] z-20 bc-black h-screen">
        <div className="flex flex-col items-center justify-between h-full">
          <Link to={layoutData.sidebar.link}>
            <h1 className="text-2xl font-semibold font-mono">
              {layoutData.sidebar.title}
            </h1>
          </Link>
          {layoutData.sidebar.navbar.map((item, index) => (
            <Link to={item.link} key={index}>
              <ul className="flex flex-col items-center justify-center">
                <li className="c-green text-2xl cursor-pointer">{item.icon}</li>
                <li className="text-base cursor-pointer">{item.title}</li>
              </ul>
            </Link>
          ))}

          <ul className="flex flex-col items-center justify-center">
            <li className="c-green text-2xl cursor-pointer">
              <FiSearch />
            </li>
            <li>Search</li>
          </ul>
          <ul className="flex flex-col items-center justify-center">
            <li
              onClick={handleUserIconClick}
              className="w-14 h-14 flex items-center justify-center c-black text-2xl rounded-full bc-green cursor-pointer relative"
            >
              <FaRegUser />
            </li>
          </ul>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`absolute bottom-16 left-0 rounded-e-md p-3 
        transform transition-transform duration-500 ease-in-out -z-10 ${
          showUserMenu
            ? "translate-x-[8.3em] opacity-100"
            : "-translate-x-full opacity-100"
        }`}
      >
        {layoutData.sidebar.auth.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            onClick={handleCloseMenu}
            className={`block w-full py-2 px-4 text-center mb-2 rounded-md ${
              item.title === "Register"
                ? "c-black bc-green"
                : "c-green border border-green bc-black"
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
