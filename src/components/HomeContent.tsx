"use client";
import { ReactNode, useState } from "react";

import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { ExpandableSection } from "@/components/ExpandableSection";
import { AboutContent } from "@/components/content/About";
import { BookingContent } from "@/components/content/Booking";
import { EpkContent } from "@/components/content/Epk";
import { InteractiveText } from "@/components/InteractiveText";
import { NavLinks, NavKey } from "@/components/NavLinks";

interface ContentMap extends Record<NavKey, ReactNode> {}

export function HomeContent(): JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [expandedContent, setExpandedContent] = useState<ReactNode | null>(
    null
  );
  const [activeItem, setActiveItem] = useState<NavKey | null>(null);

  const contentMap: ContentMap = {
    About: <AboutContent />,
    Booking: <BookingContent />,
    EPK: <EpkContent />,
  };

  // Handle collapse triggers
  const handleCollapse = () => {
    if (isExpanded) {
      setActiveItem(null);
      setIsExpanded(false);
    }
  };

  // Handle menu item clicks
  const handleMenuClick = (item: NavKey): void => {
    if (!isExpanded) {
      // If collapsed, expand with the clicked item's content
      setActiveItem(item);
      setExpandedContent(contentMap[item]);
      setIsExpanded(true);
    } else if (item === activeItem) {
      // If expanded and clicking active item, collapse
      setActiveItem(null);
      setIsExpanded(false);
    } else {
      // If expanded and clicking different item, switch content
      setActiveItem(item);
      setExpandedContent(contentMap[item]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden relative bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute w-screen h-screen inset-0 w-full h-full object-cover z-0 m-0 p-0"
      >
        <source src="/videos/vid-back.mp4" type="video/mp4" />
      </video>

      {/* The content of the page is in the footer the main area only shows the logo. */}
      {/* TODO: Page height changes currently break the page, fix it, depends on right logo behaviour, footer  */}
      {/* TODO: On page reloads it should start from the beginning. */}
      <main className="h-screen flex flex-col items-center justify-center relative">
        <Logo />
      </main>

      {/* TODO: We can play with the footer bg opacity. */}
      {/* TODO: When the page height reduces the opacity of the logo might reduce also, possibilities.. */}
      <footer className="bg-black text-sitePink pt-0 pb-0 relative z-10 flex flex-col justify-start">
        {/* Social Media Links Row */}
        <div className="flex flex-row justify-center z-10 text-base sm:text-2xl pl-6 pr-6 border border-wite">
          <SocialLinks
            data={
              [
                ["youtube", "https://www.youtube.com"],
                ["bandcamp", "https://www.instagram.com"],
                ["spotify", "https://www.bandcamp.com"],
                ["soundcloud", "https://www.spotify.com"],
                ["reddit", "https://www.soundcloud.com"],
                ["instagram", "https://www.facebook.com"],
                ["threads", "https://www.twitter.com"],
                ["bluesky", "https://www.spotify.com"],
              ] as const
            }
          />
        </div>
        {/* Title */}
        <div className="flex flex-row justify-center z-10 pt-16 text-5xl">
          <InteractiveText
            internal={true}
            content="Desert Petunia"
            separator={false}
            animationRange={4}
            hoverInDuration={3000}
            hoverOutDuration={1000}
            onClick={handleCollapse}
          />
        </div>
        {/* Content */}
        <ExpandableSection
          content={expandedContent}
          isExpanded={isExpanded}
          onClose={() => setIsExpanded(false)}
          className="w-full max-w-3xl mx-auto text-center"
          transitionDuration={800}
        />
        {/* Navigation */}
        <div className="flex flex-row justify-center z-10 pt-4">
          <NavLinks
            data={["About", "Booking", "EPK"]}
            onItemClick={handleMenuClick}
          />
        </div>
        {/* Footer Small Text Info */}
        <div className="flex flex-row justify-center z-10 pt-12">
          <div className="flex flex-col justify-center z-10">
            <p className="text-xs">© 2025 Petunia. All rights reserved.</p>
            <p className="text-xs text-center pt-2 pb-6">
              Contact:{" "}
              <a href="mailto:info@petunia.audio">
                <span className="font-bold">info@petunia.audio</span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
