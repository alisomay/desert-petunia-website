import { HomeContent } from "@/components/HomeContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desert Petunia",
  description: "About Desert Petunia",
  keywords: ["electronic", "music", "experimental", "contact"],
};

export default function AboutPage() {
  return <HomeContent />;
}
