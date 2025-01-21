import { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Desert Petunia",
  description:
    "Electronic music project preserving the spirit of early 90s computer music",
  url: siteConfig.url,
  image: siteConfig.ogImage,
  genre: ["Electronic", "Experimental"],
  // You can add more structured data here as needed
  // For example:
  // "member": [{
  //   "@type": "Person",
  //   "name": "Your Name"
  // }],
  // "sameAs": [
  //   "https://spotify.com/...",
  //   "https://soundcloud.com/..."
  // ]
});

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  // Basic metadata
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "desert petunia",
    "electronic music",
    "90s computer music",
    "experimental music",
    // Add more relevant keywords
  ],

  // Author and creator info
  authors: [
    {
      name: "Your Name",
      url: "https://your-domain.com",
    },
  ],
  creator: "Your Name",

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
    creator: "@yourtwitterhandle",
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
    ],
  },

  // Web app manifest
  manifest: "/site.webmanifest",

  // Verification (optional)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },

  // Alternate languages (if you add them in the future)
  alternates: {
    canonical: siteConfig.url,
  },
};
