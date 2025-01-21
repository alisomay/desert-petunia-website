export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
  };
};

export type MetaData = {
  title: string;
  description: string;
  keywords: string[];
};
