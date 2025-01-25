import { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  image: siteConfig.ogImage,
  genre: ["Electronic", "Experimental"],
  member: [
    {
      "@type": "Person",
      name: "Ali Somay",
    },
  ],
});

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Desert Petunia", "electronic music", "experimental music"],

  authors: [
    {
      name: "Ali Somay",
      url: siteConfig.url,
    },
  ],
  creator: "Ali Somay",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    // No twitter (X) account will be created for this project.
    // creator: "@yourtwitterhandle",
  },

  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons configuration
  icons: {
    icon: [
      { url: "/favicon.svg" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" },
      { rel: "shortcut icon", url: "/favicon.ico" },
      { rel: "msapplication-TileImage", url: "/mstile-144x144.png" },
    ],
  },

  // Web app manifest
  manifest: "/site.webmanifest",

  // Verification (optional)
  // verification: {
  //   google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  // },
};
