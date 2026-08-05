"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded text-black dark:bg-black dark:text-white"
    >
      <Image
        src="/images/icon-lang.svg"
        alt="Language"
        className="size-[24px] object-contain hover:scale-110 transition-transform rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        width={24}
        height={24}
      />
      {/* <Image
        src="/images/icon-lang.svg"
        alt="Language"
        className="size-[24px] object-contain hover:scale-110 transition-transform rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        width={24}
        height={24}
      /> */}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
