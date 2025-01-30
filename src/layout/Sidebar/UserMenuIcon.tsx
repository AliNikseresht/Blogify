import { User } from "firebase/auth";
import { FaRegUser } from "react-icons/fa6";

interface UserMenuIconProps {
  onClick: () => void;
   user: User | null;
  MAX_AUTHOR_LENGTH: number;
}

const UserMenuIcon: React.FC<UserMenuIconProps> = ({
  onClick,
  user,
  MAX_AUTHOR_LENGTH,
}) => {
  return (
    <ul className="flex flex-col items-center justify-center">
      <li
        onClick={onClick}
        className="w-14 h-14 flex items-center justify-center c-black text-2xl rounded-full bc-green cursor-pointer relative"
      >
        <FaRegUser />
      </li>
      <li className="text-xs mt-2">
        {user?.email
          ? user.email.length > MAX_AUTHOR_LENGTH
            ? `${user.email.slice(0, MAX_AUTHOR_LENGTH)}...`
            : user.email
          : "Anonymous"}
      </li>
    </ul>
  );
};

export default UserMenuIcon;
