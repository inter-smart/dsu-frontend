"use client";

import * as React from "react";
import { useTheme } from "@/components/theme-provider";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className, iconClassName }) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn("max-sm:p-[10px] max-sm:!pr-0 p-[4.5px] -m-[1.5px] rounded text-black dark:bg-white dark:text-white", className)}
    >
      <Image
        src="/images/icon-lang.svg"
        alt="Language"
        className={cn(
          "size-[25px] sm:size-[24px] object-contain hover:scale-110 transition-transform rotate-0 scale-100 transition-all dark:invert",
          iconClassName
        )}
        width={24}
        height={24}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
