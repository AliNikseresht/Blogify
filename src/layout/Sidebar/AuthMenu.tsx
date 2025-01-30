import { Link } from "react-router-dom";
import { layoutData } from "../../data/layout";

interface AuthMenuProps {
  menuRef: React.RefObject<HTMLDivElement>;
  showUserMenu: boolean;
  handleCloseMenu: () => void;
}

const AuthMenu: React.FC<AuthMenuProps> = ({
  menuRef,
  showUserMenu,
  handleCloseMenu,
}) => {
  return (
    <div
      ref={menuRef}
      className={`absolute bottom-16 left-0 rounded-e-md p-3 transform transition-transform duration-500 ease-in-out -z-10 ${
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
  );
};

export default AuthMenu;
