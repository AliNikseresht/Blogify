import { layoutData } from "../data/layout";

const Footer = () => {
  return (
    <div className="flex flex-col w-full items-center py-2">
      <div>{layoutData.footer.title}</div>
      <div>{layoutData.footer.subTitle}</div>
    </div>
  );
};

export default Footer;
