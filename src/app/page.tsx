import { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Home",
  description: "Desert Petunia Landing Page",
  keywords: ["electronic", "music", "experimental"],
};

export default function Home() {
  return <HomeContent />;
}
