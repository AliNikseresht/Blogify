export type TLayout = {
  sidebar: {
    title: string;
    link: string;
    navbar: {
      title: string;
      link: string;
      icon: React.ReactNode;
    }[];
    auth: {
      title: string;
      link: string;
    }[];
    profile_lists: {
      title: string;
      icon: React.ReactNode;
    }[];
    createBlog: string;
  };
  footer: {
    title: string;
    subTitle: string;
  };
};
