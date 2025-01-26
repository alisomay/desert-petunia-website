// src/lib/constants.ts
import { SiteConfig } from "@/types";

// export const siteConfig: SiteConfig = {
//   name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Desert Petunia",
//   description:
//     process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
//     `Preserve the "beginner's mind"`,
//   url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://desertpetunia.com",
//   ogImage: `${
//     process.env.NEXT_PUBLIC_SITE_URL ?? "https://desertpetunia.com"
//   }/og.jpg`,
// } as const;

export const siteConfig: SiteConfig = {
  name: "Desert Petunia",
  description: `Preserve the "beginner's mind"`,
  url: "https://desertpetunia.com",
  ogImage: `${"https://desertpetunia.com"}/og.jpg`,
} as const;
