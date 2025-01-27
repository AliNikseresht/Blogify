import { Link, useNavigate } from "react-router-dom";
import { layoutData } from "../../data/layout";
import { FaRegUser } from "react-icons/fa6";
import { useAuth } from "../../hooks/AuthContext";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { BiHome } from "react-icons/bi";

const MenuMobile = () => {
  //state
  const [showUserMenu, setShowUserMenu] = useState(false);

  //hooks
  const navigate = useNavigate();
  const { user } = useAuth();
  const menuRef = useRef<HTMLDivElement | null>(null);

  //handler
  const handleCloseMenu = () => {
    setShowUserMenu(false);
  };

  const handleUserIconClick = () => {
    if (user) {
      navigate("/");
    } else {
      setShowUserMenu((prev) => !prev);
    }
  };

  const handleCreateClick = () => {
    if (!user) {
      toast.error("You must create an account to create a blog!");
    } else {
      navigate("/create");
    }
  };

  return (
    <div className="fixed bottom-0 w-full left-0 border border-[#6EEB83] flex md:hidden items-center">
      <div className="w-full flex items-center justify-between p-3 z-20 bc-black">
        <div className="flex items-center justify-between h-full w-full">
          <Link to={layoutData.sidebar.link}>
            <h1 className="text-2xl font-semibold c-green">
              <BiHome />
            </h1>
          </Link>
          {layoutData.sidebar.navbar.map((item, index) => (
            <ul
              key={index}
              className="flex flex-col items-center justify-center"
            >
              {item.title === "Create" ? (
                <div
                  onClick={handleCreateClick}
                  className="flex flex-col items-center"
                >
                  <li className="c-green text-2xl cursor-pointer">
                    {item.icon}
                  </li>
                </div>
              ) : (
                <Link to={item.link} className="flex flex-col items-center">
                  <li className="c-green text-2xl cursor-pointer">
                    {item.icon}
                  </li>
                </Link>
              )}
            </ul>
          ))}

          <ul className="flex flex-col items-center justify-center">
            <li
              onClick={handleUserIconClick}
              className="w-8 h-8 flex items-center justify-center c-black text-base rounded-full bc-green cursor-pointer relative"
            >
              <FaRegUser />
            </li>
          </ul>
        </div>
      </div>

      {!user && (
        <div
          ref={menuRef}
          className={`absolute bottom-0 -right-3 rounded-e-md p-3 
          transform transition-transform duration-500 ease-in-out -z-10 ${
            showUserMenu
              ? "-translate-y-[3.2em] opacity-100"
              : "translate-y-52 opacity-100"
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
      )}
    </div>
  );
};

export default MenuMobile;
