// src/lib/constants.ts
import { SiteConfig, MetaData } from "@/types";

export const siteConfig: SiteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Your Site Name",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? "Your site description",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: `${
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  }/og.jpg`,
  links: {
    github: process.env.GITHUB_URL ?? "https://github.com/yourusername",
  },
} as const;

export const defaultMetadata: MetaData = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["keyword1", "keyword2", "keyword3"],
};
