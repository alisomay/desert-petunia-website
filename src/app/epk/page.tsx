import { HomeContent } from "@/components/HomeContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Epk",
  description: "Desert Petunia Electronic Press Kit",
  keywords: ["electronic", "music", "experimental"],
};

export default function EpkPage() {
  return <HomeContent />;
}
