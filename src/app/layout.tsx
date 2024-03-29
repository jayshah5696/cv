"use client";

import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const handleDarkMode = () => {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    };

    handleDarkMode();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleDarkMode);

    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handleDarkMode);
    };
  }, []);

  return (
    <html lang="en" className={cn(inter.className, { "dark": isDarkMode })}>
      <body className={cn({ "dark": isDarkMode })}>{children}</body>
      <Analytics />
    </html>
  );
}