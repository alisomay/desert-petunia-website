"use client";
import { InteractiveText } from "@/components/InteractiveText";

export type NavKey = "About" | "Booking" | "EPK";

export function NavLinks({
  data = [],
  onItemClick,
}: {
  data: NavKey[];
  onItemClick?: (item: NavKey) => void;
}) {
  const handleClick = (item: NavKey) => {
    onItemClick?.(item);
  };

  return (
    <nav
      aria-label="Main navigation"
      className="flex flex-row justify-center z-10 
      text-[1.2rem]
      bra:text-xl
      brb:text-2xl
      font-normal"
      data-menu-item="true"
    >
      {data.map((item, index) =>
        index === data.length - 1 ? (
          <InteractiveText
            key={index}
            internal={true}
            content={item}
            separator={false}
            onClick={() => handleClick(item)}
          />
        ) : (
          <InteractiveText
            key={index}
            internal={true}
            content={item}
            onClick={() => handleClick(item)}
          />
        )
      )}
    </nav>
  );
}
