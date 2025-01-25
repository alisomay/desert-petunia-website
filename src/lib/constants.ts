// src/lib/constants.ts
import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Desert Petunia",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    `
  Desert Petunia is a project dedicated to keep the spirit of the first interactions I've had with music through computers back in early 90's.
  Light, playful, curious, setting the mood for emergent natural fun.
  Dedicated to preserve the "beginner's mind".  
  The "Petunia" in the name is inspired from young Pete's tattoo`,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://desertpetunia.com",
  ogImage: `${
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://desertpetunia.com"
  }/og.jpg`,
} as const;
