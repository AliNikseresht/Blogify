import { User } from "firebase/auth";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleLine } from "react-icons/ri";

interface UserModalProps {
  user: User | null;
  onLogout: () => void;
  onClose: () => void;
  modalRef: React.RefObject<HTMLDivElement>;
}

const UserModal: React.FC<UserModalProps> = ({
  user,
  onLogout,
  onClose,
  modalRef,
}) => {
  return (
    <div
      ref={modalRef}
      className="absolute bottom-[6.3em] -right-[8.7em] flex items-center justify-center"
    >
      <div className="w-full max-w-xl flex flex-col items-start justify-start">
        <div className="py-2 px-3.5 text-center mb-2 rounded-md flex items-center c-green border border-green bc-black">
          <CgProfile size={22} color="#6eeb83" />
          <p className="text-sm c-white">{user?.email}</p>
        </div>
        <button
          onClick={() => {
            onLogout();
            onClose();
          }}
          className="py-2 px-4 text-center mb-2 rounded-md c-black bc-green flex items-center"
        >
          <RiLogoutCircleLine size={20} color="#212121" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserModal;
