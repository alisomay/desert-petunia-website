"use client";
import React, { useState, useEffect, useRef, ReactNode } from "react";

interface ExpandableSectionProps {
  content: ReactNode;
  isExpanded: boolean;
  onClose: () => void;
  className?: string;
  transitionDuration?: number;
}

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  content,
  isExpanded,
  onClose,
  className = "",
  transitionDuration = 300,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [height, setHeight] = useState<number>(0);
  const [currentContent, setCurrentContent] = useState<ReactNode>(content);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Update height whenever content changes or expansion state changes
  const updateHeight = () => {
    if (contentRef.current) {
      const newHeight = isExpanded ? contentRef.current.scrollHeight : 0;
      setHeight(newHeight);
    }
  };

  // Handle content changes and expansion state
  useEffect(() => {
    if (isExpanded) {
      // Immediate content update when expanded
      setCurrentContent(content);
      // Use double requestAnimationFrame to ensure DOM update before height calculation
      requestAnimationFrame(() => {
        requestAnimationFrame(updateHeight);
      });
    } else if (!isTransitioning) {
      // Delayed content update when collapsed
      const timer = setTimeout(() => {
        setCurrentContent(content);
      }, transitionDuration);
      return () => clearTimeout(timer);
    }
  }, [content, isExpanded, isTransitioning, transitionDuration]);

  // Update height on expansion state change
  useEffect(() => {
    updateHeight();
  }, [isExpanded]);

  // Handle dynamic content changes with ResizeObserver
  useEffect(() => {
    if (!contentRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (isExpanded) {
        updateHeight();
      }
    });

    resizeObserver.observe(contentRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [isExpanded]);

  // Handle transition states
  const handleTransitionStart = (): void => {
    setIsTransitioning(true);
  };

  const handleTransitionEnd = (): void => {
    setIsTransitioning(false);
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        wrapperRef.current &&
        event.target instanceof Node &&
        !wrapperRef.current.contains(event.target) &&
        !(event.target as HTMLElement).closest('[data-menu-item="true"]')
      ) {
        onClose();
      }
    };

    if (isExpanded) {
      // Small delay to prevent immediate closure
      const timer = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 0);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isExpanded, onClose]);

  // Handle scroll into view when expanded
  useEffect(() => {
    if (isExpanded && wrapperRef.current) {
      const timer = setTimeout(() => {
        wrapperRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }, transitionDuration * 1);

      return () => clearTimeout(timer);
    }
  }, [isExpanded, transitionDuration]);

  return (
    <div
      ref={wrapperRef}
      className={`overflow-hidden transition-[height] ease-in-out scroll-mt-8 ${className}`}
      style={{
        height: `${height}px`,
        transitionDuration: `${transitionDuration}ms`,
      }}
      onTransitionStart={handleTransitionStart}
      onTransitionEnd={handleTransitionEnd}
    >
      <div ref={contentRef} className="bg-black/80 text-sitePink p-8">
        {currentContent}
      </div>
    </div>
  );
};
