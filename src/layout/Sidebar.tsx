import { Link, useLocation, useNavigate } from "react-router-dom";
import { layoutData } from "../data/layout";
import { useAuth } from "../hooks/AuthContext";
import { toast } from "react-toastify";
import useUserMenu from "../hooks/useUserMenu";
import SidebarMenuItem from "./Sidebar/SidebarMenuItem";
import UserMenuIcon from "./Sidebar/UserMenuIcon";
import UserModal from "./Sidebar/UserModal";
import AuthMenu from "./Sidebar/AuthMenu";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const hideSidebarPaths = ["/login", "/register"];
  const shouldHideSidebar = hideSidebarPaths.includes(location.pathname);

  const {
    showUserMenu,
    showUserModal,
    MAX_AUTHOR_LENGTH,
    menuRef,
    modalRef,
    handleUserIconClick,
    handleCloseModal,
    handleCloseMenu,
  } = useUserMenu(user, logout);

  const handleCreateClick = () => {
    if (!user) {
      toast.error("You must create an account to create a blog!");
    } else {
      navigate("/create");
    }
  };

  if (shouldHideSidebar) return null;

  return (
    <div className="sidebar fixed start-0 top-0 w-[240px] z-50 transition-all">
      <div className="w-[7.5rem] border-r border-green hidden md:flex flex-col items-center justify-between py-[6.5em] z-20 bc-black h-screen">
        <div className="flex flex-col items-center justify-between h-full">
          <Link to={layoutData.sidebar.link}>
            <h1 className="text-3xl font-semibold">
              {layoutData.sidebar.title}
            </h1>
          </Link>

          {layoutData.sidebar.navbar.map((item, index) => (
            <SidebarMenuItem
              key={index}
              item={item}
              handleCreateClick={handleCreateClick}
            />
          ))}

          <UserMenuIcon
            onClick={handleUserIconClick}
            user={user}
            MAX_AUTHOR_LENGTH={MAX_AUTHOR_LENGTH}
          />
        </div>
      </div>

      {showUserModal && (
        <UserModal
          user={user}
          onLogout={logout}
          onClose={handleCloseModal}
          modalRef={modalRef}
        />
      )}

      {!user && (
        <AuthMenu
          menuRef={menuRef}
          showUserMenu={showUserMenu}
          handleCloseMenu={handleCloseMenu}
        />
      )}
    </div>
  );
};

export default Sidebar;
