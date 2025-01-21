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
    <div
      className="flex flex-row justify-center z-10 text-2xl font-normal"
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
    </div>
  );
}
