"use client";

import { useState } from "react";

// Handles watch, youtu.be, embed, shorts and live links, or a bare 11 character id
const YOUTUBE_ID =
  /(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/|v\/)|youtu\.be\/)([\w-]{11})/i;

export function getYoutubeId(value = "") {
  const text = String(value).trim();
  if (/^[\w-]{11}$/.test(text)) return text;
  return text.match(YOUTUBE_ID)?.[1] || null;
}

// Shows a poster with a play button, and only loads the YouTube iframe once clicked
export default function AiFirstYoutubePlayer({ url, poster, title = "AI-First initiative video" }) {
  const [playing, setPlaying] = useState(false);
  const id = getYoutubeId(url);

  if (!id) return null;

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        className="w-full h-full border-0"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group w-full h-full block relative z-0 cursor-pointer bg-black"
    >
      {/* Plain img: the YouTube thumbnail host is not part of next/image config */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <span className="absolute z-1 inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/35" />
      <span className="size-14 sm:size-16 2xl:size-20 m-auto rounded-full bg-white/90 flex items-center justify-center shadow-lg absolute z-2 inset-0 transition-transform duration-300 group-hover:scale-110">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 sm:size-7 2xl:size-9 ml-1 fill-[#9C2727]">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
