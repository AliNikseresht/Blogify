import { IoMdInformationCircleOutline } from "react-icons/io";
import { homeData } from "../../../data/home";

const EmptyState = () => (
  <div className="flex justify-center flex-col items-center mt-[16em]">
    <p className="text-center text-lg font-medium">{homeData.NoBlogText}</p>
    <div className="flex items-center text-lg gap-0.5 c-green">
      <IoMdInformationCircleOutline />
      <span className="text-sm mb-[0.11em] c-white">{homeData.VPNText}</span>
    </div>
  </div>
);

export default EmptyState;
