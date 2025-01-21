"use client";
import { InteractiveText } from "@/components/InteractiveText";

export function SocialLinks({ data = [] }: { data: string[][] }) {
  return (
    <div className="flex flex-row justify-center flex-wrap z-10 pr-32 pl-32 font-normal min-w-[500px] xsm:min-w-[600px]  max-w-[1000px] border border-white">
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
    </div>
  );
}
