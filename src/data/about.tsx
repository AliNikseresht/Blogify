import { TAboutData } from "../types/about";

export const aboutData: TAboutData = {
  title: "About Blogify",
  description:
    "Blogify is a modern and responsive blogging application built with React, TypeScript, Tailwind CSS, and Firebase. It provides users with the ability to read blogs, create accounts, and publish their own blogs in a seamless and user-friendly interface.",
  features: {
    title: "Key Features",
    featureItems: [
      "Responsive design for a seamless experience on mobile, tablet, and desktop devices.",
      "User authentication and account creation via Firebase.",
      "Ability to create, edit, and publish blogs in real-time.",
      "Modern UI/UX with Tailwind CSS.",
      "Built with TypeScript for better maintainability and scalability.",
    ],
  },
  developerInfo: {
    title: "About the Developer",
    subTitle: "Hi! I'm",
    developerName: "Ali Nikseresht",
    developerInfoDescription:
      "a passionate frontend developer with expertise in modern web technologies.",
  },
  contact: {
    title: "Connect with me on:",
    links: [
      {
        title: "GitHub",
        link: "https://github.com/AliNikseresht",
      },
    ],
  },
};
