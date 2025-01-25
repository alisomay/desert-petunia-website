import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  useCallback,
} from "react";

interface ExpandableSectionProps {
  /**
   * The ReactNode to be shown or hidden.
   * If `isExpanded`, it is rendered immediately;
   * if not expanded, it is hidden after a collapse animation.
   */
  content: ReactNode;
  /**
   * Whether the section is currently expanded/visible.
   */
  isExpanded: boolean;
  /**
   * Callback for when the user clicks outside the expanded area,
   * or otherwise triggers a close action.
   */
  onClose: () => void;
  /**
   * Additional class name(s) for styling the root section.
   */
  className?: string;
  /**
   * Duration (in ms) of the expand/collapse animation.
   */
  transitionDuration?: number;
  /**
   * String identifier for ARIA attributes (e.g. "About", "Booking", etc.).
   */
  activeSection?: string;
}

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  content,
  isExpanded,
  onClose,
  className = "",
  transitionDuration = 300,
  activeSection,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [height, setHeight] = useState<number>(0);
  const [currentContent, setCurrentContent] = useState<ReactNode>(content);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Generate unique ID for ARIA attributes
  const sectionId = `section-${activeSection?.toLowerCase()}`;
  const contentId = `content-${activeSection?.toLowerCase()}`;

  /**
   * Calculates the appropriate height to either expand or collapse the section.
   */
  const updateHeight = useCallback(() => {
    if (contentRef.current) {
      const newHeight = isExpanded ? contentRef.current.scrollHeight : 0;
      setHeight(newHeight);
    }
  }, [isExpanded]);

  /**
   * Handle content changes and expansion state.
   * - If becoming expanded, set the new content immediately, then measure height.
   * - If collapsing, wait until animation finishes before updating the content.
   */
  useEffect(() => {
    if (isExpanded) {
      // Immediate content update when expanded
      setCurrentContent(content);

      // Use double requestAnimationFrame to ensure DOM updates before measuring
      requestAnimationFrame(() => {
        requestAnimationFrame(updateHeight);
      });
    } else if (!isTransitioning) {
      // Delayed content update after collapse animation finishes
      const timer = setTimeout(() => {
        setCurrentContent(content);
      }, transitionDuration);

      return () => clearTimeout(timer);
    }
  }, [content, isExpanded, isTransitioning, transitionDuration, updateHeight]);

  /**
   * Whenever isExpanded changes, recalculate the height.
   */
  useEffect(() => {
    updateHeight();
  }, [isExpanded, updateHeight]);

  /**
   * Watch for size changes inside the content (e.g., images loading)
   * so we can recalc the height if the section is expanded.
   */
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
  }, [isExpanded, updateHeight]);

  /**
   * Mark when a transition starts/ends so we know when it's safe to reset content.
   */
  const handleTransitionStart = () => setIsTransitioning(true);
  const handleTransitionEnd = () => setIsTransitioning(false);

  /**
   * Close the section if a user clicks outside the section (and not on a nav item).
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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
      // Slight delay to avoid immediately closing if you just clicked to open
      const timer = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 0);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isExpanded, onClose]);

  /**
   * Automatically scroll the newly expanded section into view.
   */
  useEffect(() => {
    if (isExpanded && wrapperRef.current) {
      const timer = setTimeout(() => {
        wrapperRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }, transitionDuration);

      return () => clearTimeout(timer);
    }
  }, [isExpanded, transitionDuration]);

  return (
    <section
      ref={wrapperRef}
      className={`overflow-hidden transition-[height] ease-in-out scroll-mt-8 ${className}`}
      style={{
        height: `${height}px`,
        transitionDuration: `${transitionDuration}ms`,
      }}
      onTransitionStart={handleTransitionStart}
      onTransitionEnd={handleTransitionEnd}
      aria-labelledby={sectionId}
      role="region"
    >
      <div
        ref={contentRef}
        id={contentId}
        className="bg-black/80 text-sitePink p-8"
        aria-hidden={!isExpanded}
      >
        {currentContent}
      </div>
    </section>
  );
};
