"use client";
import Image from "next/image";
import { useState } from "react";

// next/image that never shows a broken-image icon: nothing is rendered for an empty `src`,
// and the image is swapped for `fallbackSrc` (or removed) when it fails to load.
export default function SafeImage({ src, fallbackSrc, onError, ...props }) {
  const [failed, setFailed] = useState([]);

  const currentSrc = [src, fallbackSrc].find((candidate) => candidate && !failed.includes(candidate));
  if (!currentSrc) return null;

  return (
    <Image
      {...props}
      src={currentSrc}
      onError={(event) => {
        onError?.(event);
        setFailed((prev) => [...prev, currentSrc]);
      }}
    />
  );
}
