"use client";
import React from "react";

export function InteractiveText({
  href = "",
  content = "",
  separator = true,
  internal = false,
  animationRange = 2,
  hoverInDuration = 300,
  hoverOutDuration = 800,
  onClick,
}: {
  href?: string;
  content?: string;
  separator?: boolean;
  internal?: boolean;
  animationRange?: number;
  hoverInDuration?: number;
  hoverOutDuration?: number;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    // For internal links, prevent default behavior
    if (internal) {
      e.preventDefault();
    }
    // Call the provided onClick handler if it exists
    onClick?.(e);
  };

  const LinkContent = () => (
    <div
      className="relative"
      style={
        {
          "--hover-in": `${hoverInDuration}ms`,
          "--hover-out": `${hoverOutDuration}ms`,
        } as React.CSSProperties
      }
    >
      <style>{`
        .link-text {
          transition-duration: var(--hover-out);
        }
        .group:hover .link-text {
          transition-duration: var(--hover-in);
        }
      `}</style>
      <span
        className="link-text absolute inset-0 text-[#009444] transition-transform ease-out group-hover:[transform:translate(var(--move-range),var(--move-range))]"
        style={
          {
            "--move-range": `-${animationRange}px`,
          } as React.CSSProperties
        }
      >
        {content}
      </span>
      <span
        className="link-text absolute inset-0 text-[#00aeef] transition-transform ease-out group-hover:[transform:translate(var(--move-range),var(--move-range))]"
        style={
          {
            "--move-range": `${animationRange}px`,
          } as React.CSSProperties
        }
      >
        {content}
      </span>
      <span className="relative text-[#ec008c]">{content}</span>
    </div>
  );

  return (
    <div className="relative inline-block group">
      {internal ? (
        <div
          className="relative inline-block font-normal cursor-pointer"
          onClick={handleClick}
        >
          <LinkContent />
        </div>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block font-normal"
          onClick={handleClick}
        >
          <LinkContent />
        </a>
      )}
      {separator && <span>&nbsp;/&nbsp;</span>}
    </div>
  );
}
