import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";
import { Metadata } from "next";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["your", "keywords", "here"],
  authors: [
    {
      name: "Your Name",
      url: "https://your-domain.com",
    },
  ],
  creator: "Your Name",
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
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@yourtwitterhandle",
  },
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
  icons: {
    icon: [
      // Primary SVG favicon - handles modern browsers and dark mode
      { url: "/favicon.svg" },
      // 32x32 PNG for browsers that don't support SVG
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      // 16x16 PNG for really old browsers and task bar
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    // iOS home screen icon (different from favicon)
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    // PWA icons - different sizes needed for various device scenarios
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" },
      { rel: "shortcut icon", url: "/favicon.ico" }, // Legacy fallback, contains 16x16 and 32x32
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
