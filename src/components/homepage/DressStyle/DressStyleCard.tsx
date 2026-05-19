import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type DressStyleCardProps = {
  title: string;
  url: string;
  className?: string;
};

const DressStyleCard = ({ title, url, className }: DressStyleCardProps) => {
  return (
    <Link
      href={url}
      className={cn([
        "w-full md:h-full rounded-[20px] bg-white bg-top text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover flex items-end relative overflow-hidden hover:opacity-90 transition-opacity",
        className,
      ])}
    >
      {/* Dark gradient overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-[20px]"></div>
      {/* Text container with shadow */}
      <span className="relative z-10 text-white drop-shadow-lg">{title}</span>
    </Link>
  );
};

export default DressStyleCard;
