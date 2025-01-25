"use client";
import { InteractiveText } from "@/components/InteractiveText";

export function SocialLinks({ data = [] }: { data: string[][] }) {
  return (
    <nav
      aria-label="Social media links"
      className="
    flex 
    flex-row 
    justify-center 
    flex-wrap 
    z-10
    font-normal 
    
    text-base
    bra:text-[1.1rem]
    brb:text-2xl
    
    bra:max-w-[700px]
    brb:max-w-[1000px]"
    >
      {data.map((item, index) =>
        index === data.length - 1 ? (
          <InteractiveText
            key={index}
            href={item[1]}
            content={item[0]}
            separator={false}
          />
        ) : (
          <InteractiveText key={index} href={item[1]} content={item[0]} />
        )
      )}
    </nav>
  );
}
