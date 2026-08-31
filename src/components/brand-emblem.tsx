import React from "react";
import { cn } from "@/lib/utils";

interface BrandEmblemProps {
  size?: "xs" | "sm" | "md" | "lg" | number;
  className?: string;
  animated?: boolean;
  hoverSpin?: boolean;
  idPrefix?: string;
}

export function BrandEmblem({
  size = "md",
  className,
  animated = false,
  hoverSpin = true,
  idPrefix = "cv-emblem",
}: BrandEmblemProps) {
  const sizeMap = {
    xs: "size-5",
    sm: "size-7",
    md: "size-10",
    lg: "size-16",
  };

  const dim = typeof size === "string" ? sizeMap[size] : undefined;
  const style = typeof size === "number" ? { width: size, height: size } : undefined;
  const isCompact = size === "xs" || size === "sm";
  const strokeWidth = isCompact ? 6.5 : 5.5;

  return (
    <div
      className={cn("relative inline-flex items-center justify-center shrink-0 select-none group/emblem", dim, className)}
      style={style}
      aria-label="Jay Shah Vav Monogram"
      role="img"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-full transition-transform duration-500 ease-out group-hover/emblem:scale-[1.04]"
        shapeRendering="geometricPrecision"
      >
        <defs>
          <linearGradient id={`${idPrefix}-j-flow`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c4623a" className="dark:stop-[#e07a4f]" />
            <stop offset="100%" stopColor="#e07a4f" className="dark:stop-[#f09068]" />
          </linearGradient>
          <linearGradient id={`${idPrefix}-s-flow`} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e07a4f" className="dark:stop-[#f09068]" />
            <stop offset="50%" stopColor="#d4a843" className="dark:stop-[#e8c462]" />
            <stop offset="100%" stopColor="#d4a843" className="dark:stop-[#e8c462]" />
          </linearGradient>
        </defs>

        {/* Squircle Tile */}
        <rect
          width="100"
          height="100"
          rx="22"
          className="fill-stone-100 dark:fill-stone-900 transition-colors duration-300"
        />
        <rect
          x="1.5"
          y="1.5"
          width="97"
          height="97"
          rx="20.5"
          className="stroke-stone-900/10 dark:stroke-white/10"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Concentric Kolam Orbital Frame (R >= 35px, Zero Monogram Overlap) */}
        <g
          className={cn("transition-transform duration-700", hoverSpin && "group-hover/emblem:rotate-180")}
          style={{ transformOrigin: "50px 50px" }}
        >
          <rect
            x="20"
            y="20"
            width="60"
            height="60"
            rx="8"
            transform="rotate(45 50 50)"
            className="stroke-orange-600/35 dark:stroke-amber-400/35"
            strokeWidth="1.4"
            strokeDasharray="3.5 3.5"
            fill="none"
          />
          <rect
            x="27"
            y="27"
            width="46"
            height="46"
            rx="6"
            transform="rotate(45 50 50)"
            className="stroke-amber-500/25 dark:stroke-orange-400/25"
            strokeWidth="1"
            strokeDasharray="2.5 2.5"
            fill="none"
          />
          <circle cx="50" cy="8" r="2.2" className="fill-orange-600 dark:fill-orange-400" />
          <circle cx="50" cy="92" r="2.2" className="fill-orange-600 dark:fill-orange-400" />
          <circle cx="8" cy="50" r="2.2" className="fill-orange-600 dark:fill-orange-400" />
          <circle cx="92" cy="50" r="2.2" className="fill-orange-600 dark:fill-orange-400" />
          <circle cx="21" cy="21" r="1.3" className="fill-amber-500 dark:fill-amber-300 opacity-60" />
          <circle cx="79" cy="21" r="1.3" className="fill-amber-500 dark:fill-amber-300 opacity-60" />
          <circle cx="21" cy="79" r="1.3" className="fill-amber-500 dark:fill-amber-300 opacity-60" />
          <circle cx="79" cy="79" r="1.3" className="fill-amber-500 dark:fill-amber-300 opacity-60" />
        </g>

        {/* J Stem */}
        <path
          d="M 26 26 H 38 V 56 C 38 68, 30 74, 20 66"
          stroke={`url(#${idPrefix}-j-flow)`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* S Flow */}
        <path
          d="M 72 28 C 72 19, 56 19, 46 26 C 39 31, 45 41, 56 45 C 66 49, 74 57, 70 69 C 66 79, 50 80, 38 72"
          stroke={`url(#${idPrefix}-s-flow)`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Central Bindu */}
        <circle cx="50" cy="50" r="4" className="fill-stone-900 dark:fill-stone-100" />
        <circle
          cx="50"
          cy="50"
          r="7.5"
          className="stroke-amber-500 dark:stroke-amber-300 opacity-50 group-hover/emblem:opacity-90 transition-all duration-300"
          strokeWidth="1.2"
          strokeDasharray="2.5 2"
          fill="none"
        />
      </svg>
    </div>
  );
}
