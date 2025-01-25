import { HomeContent } from "@/components/HomeContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking",
  description: "Desert Petunia Booking Information",
  keywords: [
    "electronic",
    "music",
    "experimental",
    "booking",
    "contact",
    "live",
  ],
};

export default function BookingPage() {
  return <HomeContent />;
}
