import { FiSearch } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import { FiTrendingUp } from "react-icons/fi";

const MenuMobile = () => {
  return (
    <div className="border border-[#6EEB83] flex md:hidden items-center p-[1em]">
      <div className="flex items-center justify-between w-full">
        <ul className="flex flex-col items-center justify-center">
          <li className="w-9 h-9 md:w-16 md:h-16 flex items-center justify-center text-[#212121] text-2xl rounded-full bg-[#6EEB83]">
            S
          </li>
        </ul>
        <ul className="flex flex-col items-center justify-center">
          <li className="text-[#6EEB83] text-4xl cursor-pointer">
            <FiSearch />
          </li>
        </ul>
        <ul className="flex flex-col items-center justify-center">
          <li className="text-[#6EEB83] text-4xl cursor-pointer">
            <FiTrendingUp />
          </li>
        </ul>
        <ul className="flex flex-col items-center justify-center">
          <li className="text-[#6EEB83] text-4xl cursor-pointer">
            <IoAddCircleOutline />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;
