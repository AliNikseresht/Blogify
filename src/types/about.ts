export type TAboutData = {
  title: string;
  description: string;
  features: {
    title: string;
    featureItems: string[];
  };
  developerInfo: {
    title: string;
    subTitle: string;
    developerName: string;
    developerInfoDescription: string;
  };
  contact: {
    title: string;
    links: {
      title: string;
      link: string;
    }[];
  };
};
