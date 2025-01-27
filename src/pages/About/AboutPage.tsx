import { aboutData } from "../../data/about";
import { FiGithub } from "react-icons/fi";

const AboutPage = () => {
  return (
    <div className="flex flex-col p-[0em] md:p-[3em] gap-[6em] min-h-screen">
      <div className="flex flex-col items-center md:w-32">
        <div className="w-14 mb-0.5 h-0.5 bc-green"></div>
        <h1 className="text-lg md:text-xl">{aboutData.title}</h1>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-lg leading-relaxed">{aboutData.description}</p>
        <h2 className="text-2xl font-semibold c-green">
          {aboutData.features.title}
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {aboutData.features.featureItems.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center gap-1.5 w-full text-xl c-green">
        <h1 className="font-bold">
          {aboutData.developerInfo.developerName}
        </h1>
        {aboutData.contact.links.map((item) => (
          <a
            href={item.link}
            className="flex items-center font-bold gap-2"
          >
            {item.title}
          </a>
        ))}
        <span>
          <FiGithub />
        </span>
      </div>
    </div>
  );
};

export default AboutPage;
