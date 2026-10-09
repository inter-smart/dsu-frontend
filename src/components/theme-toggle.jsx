"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className, iconClassName }) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn("p-0.75 rounded text-black dark:bg-white dark:text-white", className)}
    >
      <Image
        src="/images/icon-lang.svg"
        alt="Language"
        className={cn(
          "size-[15px] sm:size-[24px] object-contain hover:scale-110 transition-transform rotate-0 scale-100 transition-all dark:invert",
          iconClassName
        )}
        width={24}
        height={24}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
