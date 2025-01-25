import { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["electronic", "music", "experimental"],
};

export default function Home() {
  return <HomeContent />;
}
