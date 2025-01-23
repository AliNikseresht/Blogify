import { layoutData } from "../data/layout";

const Footer = () => {
  return (
    <div className="flex flex-col w-full items-center py-2 text-sm gap-1 md:gap-0 justify-center">
      <p>{layoutData.footer.title}</p>
      <p className="text-center text-xs md:text-sm">{layoutData.footer.subTitle}</p>
    </div>
  );
};

export default Footer;
