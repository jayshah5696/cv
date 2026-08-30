import React from "react";
import { cn } from "@/lib/utils";

interface BrandEmblemProps {
  size?: "xs" | "sm" | "md" | "lg" | number;
  className?: string;
  animated?: boolean;
}

export function BrandEmblem({
  size = "md",
  className,
  animated = false,
}: BrandEmblemProps) {
  const sizeMap = {
    xs: "size-5",
    sm: "size-7",
    md: "size-10",
    lg: "size-16",
  };

  const dim = typeof size === "string" ? sizeMap[size] : undefined;
  const style = typeof size === "number" ? { width: size, height: size } : undefined;

  return (
    <div
      className={cn("relative inline-flex items-center justify-center shrink-0 select-none", dim, className)}
      style={style}
      aria-label="Jay Shah Vav Monogram"
      role="img"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-full transition-transform duration-300 ease-out hover:scale-105"
      >
        <defs>
          <linearGradient id="cv-j-flow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e07a4f" />
            <stop offset="100%" stopColor="#f09068" />
          </linearGradient>
          <linearGradient id="cv-s-flow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f09068" />
            <stop offset="60%" stopColor="#e8c462" />
            <stop offset="100%" stopColor="#e8c462" />
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

        {/* Concentric Kolam Orbital Frame */}
        <g style={{ transformOrigin: "50px 50px" }}>
          <rect
            x="22"
            y="22"
            width="56"
            height="56"
            rx="8"
            transform="rotate(45 50 50)"
            className="stroke-orange-600/35 dark:stroke-amber-400/35"
            strokeWidth="1.5"
            strokeDasharray="3.5 3.5"
            fill="none"
          />
          <circle cx="50" cy="8" r="2.2" className="fill-orange-600 dark:fill-orange-400" />
          <circle cx="50" cy="92" r="2.2" className="fill-orange-600 dark:fill-orange-400" />
          <circle cx="8" cy="50" r="2.2" className="fill-orange-600 dark:fill-orange-400" />
          <circle cx="92" cy="50" r="2.2" className="fill-orange-600 dark:fill-orange-400" />
        </g>

        {/* J Stem */}
        <path
          d="M 33 24 H 44 M 43 24 V 58 C 43 70 33 74 24 66"
          stroke="url(#cv-j-flow)"
          strokeWidth={size === "xs" || size === "sm" ? "7" : "5.5"}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* S Flow */}
        <path
          d="M 74 30 C 74 20 58 20 48 28 C 42 34 46 44 56 48 C 68 52 74 60 70 70 C 66 78 48 78 38 72"
          stroke="url(#cv-s-flow)"
          strokeWidth={size === "xs" || size === "sm" ? "7" : "5.5"}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Central Bindu */}
        <circle cx="50" cy="50" r="4.5" className="fill-stone-900 dark:fill-stone-100" />
        <circle
          cx="50"
          cy="50"
          r="9"
          className="stroke-amber-500 dark:stroke-amber-300 opacity-60"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
    </div>
  );
}
