// src/components/HomeContent.tsx
"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { ExpandableSection } from "@/components/ExpandableSection";
import { AboutContent } from "@/components/content/About";
import { BookingContent } from "@/components/content/Booking";
import { EpkContent } from "@/components/content/Epk";
import { InteractiveText } from "@/components/InteractiveText";
import { NavLinks, NavKey } from "@/components/NavLinks";

type ContentMap = Record<NavKey, React.ReactNode>;

// Convert a pathname like "/about" to the corresponding NavKey ("About")
function routeToNavKey(pathname: string): NavKey | null {
  switch (pathname) {
    case "/about":
      return "About";
    case "/booking":
      return "Booking";
    case "/epk":
      return "EPK";
    default:
      return null; // home or unknown
  }
}

export function HomeContent() {
  const router = useRouter();
  const pathname = usePathname();

  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedContent, setExpandedContent] =
    useState<React.ReactNode | null>(null);
  const [activeItem, setActiveItem] = useState<NavKey | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isInternalNav, setIsInternalNav] = useState(false);

  // So we can have a "logo section" that covers the full viewport on load.
  const [minHeight, setMinHeight] = useState("100vh");

  // The actual content for each section
  const contentMap: ContentMap = {
    About: <AboutContent />,
    Booking: <BookingContent />,
    EPK: <EpkContent />,
  };

  // On mount, scroll to top and set minHeight
  useEffect(() => {
    window.scrollTo(0, 0);
    setMinHeight(`${window.innerHeight}px`);
  }, []);

  // Track scroll position (for header fade in/out)
  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isInternalNav) {
      return;
    }

    const matchedKey = routeToNavKey(pathname);
    if (matchedKey) {
      setActiveItem(matchedKey);
      setExpandedContent(contentMap[matchedKey]);
      setIsExpanded(true);
    } else {
      setActiveItem(null);
      setExpandedContent(null);
      setIsExpanded(false);
    }
    window.scrollTo(0, 0);
  }, [pathname, isInternalNav]);

  const handleMenuClick = (item: NavKey): void => {
    setIsInternalNav(true); // Set flag before URL change
    console.log(isExpanded);
    if (!isExpanded) {
      setActiveItem(item);
      setExpandedContent(contentMap[item]);
      setIsExpanded(true);
    } else if (item === activeItem) {
      setActiveItem(null);
      setIsExpanded(false);
    } else {
      setActiveItem(item);
      setExpandedContent(contentMap[item]);
    }
    window.history.pushState({}, "", `/${item.toLowerCase()}`);
  };

  const handleCollapse = () => {
    if (isExpanded) {
      setIsInternalNav(true);
      setActiveItem(null);
      setIsExpanded(false);
      window.history.replaceState({}, "", `/`);
    }
  };

  return (
    <div className="relative min-h-screen bg-black">
      <header className="sr-only">
        <h1>Petunia - Official Website</h1>
      </header>

      {/* Fixed Video Background */}

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

      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Logo Section */}
        <div
          className="relative flex items-center justify-center"
          style={{ minHeight }}
        >
          <Logo />
        </div>

        {/* Footer Section */}
        <footer
          className={`bg-transparent text-sitePink relative z-10 transform transition-opacity duration-300 ${
            scrollPosition > 10 ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Social Media Links Row */}
          <nav
            aria-label="Social media links"
            className="flex justify-center px-4"
          >
            <SocialLinks
              data={[
                ["youtube", "https://youtube.com/@desertpetunia"],
                // ["bandcamp", "https://www.bandcamp.com"],
                // ["spotify", "https://www.spotify.com"],
                ["soundcloud", "https://soundcloud.com/desertpetunia"],
                // ["reddit", "https://www.reddit.com"],
                ["instagram", "https://instagram.com/desert.petunia"],
                ["threads", "https://threads.net/@desert.petunia"],
                ["bluesky", "https://bsky.app/profile/desertpetunia.com"],
              ]}
            />
          </nav>

          {/* Title */}
          <div className="flex justify-center pt-16 text-3xl bra:text-4xl brb:text-5xl">
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

          {/* Expandable Content Section */}
          <ExpandableSection
            content={expandedContent}
            isExpanded={isExpanded}
            onClose={() => handleCollapse()}
            className="w-full max-w-3xl mx-auto text-center"
            transitionDuration={800}
            activeSection={activeItem || undefined}
          />

          {/* Navigation */}
          <nav
            aria-label="Main navigation"
            className="flex flex-row justify-center z-10 pt-4"
          >
            <NavLinks
              data={["About", "Booking", "EPK"]}
              onItemClick={handleMenuClick}
            />
          </nav>

          {/* Footer Info */}
          <div className="flex justify-center pt-12">
            <div className="flex flex-col justify-center">
              <p className="text-sm brb:text-[0.95rem] text-center">
                <a href="mailto:info@desertpetunia.com">
                  <span className="font-normal">info@desertpetunia.com</span>
                </a>
              </p>
              <p className="text-[0.5rem] pt-2 pb-6 text-center">
                © 2025 Petunia. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
