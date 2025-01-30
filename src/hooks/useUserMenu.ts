import { User } from "firebase/auth";
import { useState, useEffect, useRef } from "react";

const useUserMenu = (user: User | null, _onLogout: () => void) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const MAX_AUTHOR_LENGTH = 11;
  const menuRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleUserIconClick = () => {
    if (user) {
      setShowUserModal(true);
    } else {
      setShowUserMenu((prev) => !prev);
    }
  };

  const handleCloseModal = () => setShowUserModal(false);

  const handleCloseMenu = () => setShowUserMenu(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !event.composedPath().includes(menuRef.current)
      ) {
        setShowUserMenu(false);
      }

      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        !event.composedPath().includes(modalRef.current)
      ) {
        setShowUserModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    showUserMenu,
    showUserModal,
    MAX_AUTHOR_LENGTH,
    menuRef,
    modalRef,
    handleUserIconClick,
    handleCloseModal,
    handleCloseMenu,
  };
};

export default useUserMenu;
