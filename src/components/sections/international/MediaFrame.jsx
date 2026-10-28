"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PlayButton } from "./ServiceShared";

const VIDEO_FILE = /\.(mp4|webm|ogv|ogg|mov)(\?.*)?$/i;
const VIDEO_HOST = /(youtube\.com|youtu\.be|vimeo\.com)/i;

// Accepts the new shape { type, thumbnail, src } and the old shape { thumbnail, video }
function resolveMedia(media = {}) {
    const thumbnail = media.thumbnail || media.poster || media.image || "";
    const thumbIsVideo = VIDEO_FILE.test(thumbnail);

    // If no src is given but the thumbnail itself is a video file, use it as the source
    const source = media.src || media.video || media.url || (thumbIsVideo ? thumbnail : "");
    const looksLikeVideo = Boolean(media.video) || VIDEO_FILE.test(source) || VIDEO_HOST.test(source);

    // Explicit type wins. Without one, a video-looking source counts as video
    const wantsVideo = media.type ? media.type === "video" : looksLikeVideo;
    const isVideo = wantsVideo && Boolean(source);
    const isFile = isVideo && VIDEO_FILE.test(source);
    const opensLightbox = isVideo || Boolean(media.lightbox);

    if (media.type === "video" && !source && process.env.NODE_ENV !== "production") {
        console.warn("MediaFrame: type is 'video' but no src was provided", media);
    }

    return {
        thumbnail,
        thumbIsVideo,
        source,
        isVideo,
        // Only self-hosted files can autoplay inline (YouTube/Vimeo cannot)
        canAutoplay: isFile && media.autoplay !== false,
        opensLightbox,
        href: isVideo ? source : source || thumbnail,
        // Self-hosted files need an explicit type, so Fancybox always uses its video player
        fancyType: isFile ? "html5video" : undefined,
        alt: media.alt || media.alternativeText || "",
    };
}

// media: { type: "image" | "video", thumbnail, src?, lightbox?, autoplay?, alt? }
export default function MediaFrame({ media, group, sizes, className = "", children }) {
    const { thumbnail, thumbIsVideo, source, isVideo, canAutoplay, opensLightbox, href, fancyType, alt } =
        resolveMedia(media);

    const videoRef = useRef(null);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }, []);

    // Autoplay inline unless the visitor prefers reduced motion
    const inlineVideo = canAutoplay && !reducedMotion;

    // Play only while visible, pause when scrolled away
    useEffect(() => {
        const el = videoRef.current;
        if (!inlineVideo || !el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) el.play().catch(() => {});
                else el.pause();
            },
            { threshold: 0.25 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [inlineVideo]);

    const frameClass = `group relative block overflow-hidden rounded-[10px] bg-[#111] ${className}`;
    const thumbClass = "object-cover transition-transform duration-500 group-hover:scale-105";

    let visual = null;

    if (inlineVideo) {
        visual = (
            <video
                ref={videoRef}
                src={source}
                poster={thumbIsVideo ? undefined : thumbnail || undefined}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 size-full ${thumbClass}`}
            />
        );
    } else if (thumbnail && thumbIsVideo) {
        // next/image cannot load video files, so show the first frame with <video>
        visual = (
            <video
                src={`${thumbnail}#t=0.1`}
                muted
                playsInline
                preload="metadata"
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 size-full ${thumbClass}`}
            />
        );
    } else if (thumbnail) {
        visual = <Image src={thumbnail} alt={alt} fill sizes={sizes} className={thumbClass} />;
    }

    const content = (
        <>
            {visual}

            {/* Overlays (gradient, label) sit under the play button */}
            {children}

            {/* Play button only when the tile is not already playing by itself */}
            {isVideo && !inlineVideo && <PlayButton />}
        </>
    );

    if (opensLightbox) {
        return (
            <a
                href={href}
                data-fancybox={group}
                data-type={fancyType}
                data-caption={alt}
                aria-label={`${isVideo ? "Play video with sound" : "View larger image"}: ${alt}`}
                className={`${frameClass} cursor-pointer`}
            >
                {content}
            </a>
        );
    }

    return <div className={frameClass}>{content}</div>;
}