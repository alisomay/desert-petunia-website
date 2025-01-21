import { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Home",
  description: "Description here",
  keywords: ["some", "key", "words"],
};

export default function Home() {
  return <HomeContent />;
}
