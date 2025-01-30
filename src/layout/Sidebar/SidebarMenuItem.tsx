import { Link } from "react-router-dom";

interface MenuItem {
  title: string;
  link: string;
  icon: React.ReactNode;
}

interface SidebarMenuItemProps {
  item: MenuItem;
  handleCreateClick: () => void;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  item,
  handleCreateClick,
}) => {
  return (
    <ul className="flex flex-col items-center justify-center">
      {item.title === "Create" ? (
        <div onClick={handleCreateClick} className="flex flex-col items-center">
          <li className="c-green text-2xl cursor-pointer">{item.icon}</li>
          <li className="text-base cursor-pointer">{item.title}</li>
        </div>
      ) : (
        <Link to={item.link} className="flex flex-col items-center">
          <li className="c-green text-2xl cursor-pointer">{item.icon}</li>
          <li className="text-base cursor-pointer">{item.title}</li>
        </Link>
      )}
    </ul>
  );
};

export default SidebarMenuItem;
