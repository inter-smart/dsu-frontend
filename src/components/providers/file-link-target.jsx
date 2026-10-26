"use client";
import { useEffect } from "react";
import { isFileUrl } from "@/lib/schools/link-props";

// Safety net: any anchor pointing at a document (PDF etc.) opens in a new tab, even when the
// component rendering it (or the CMS data behind it) did not set target="_blank".
export default function FileLinkTarget() {
    useEffect(() => {
        const onClick = (e) => {
            const a = e.target instanceof Element ? e.target.closest("a[href]") : null;
            if (!a || a.getAttribute("target") || !isFileUrl(a.getAttribute("href"))) return;
            a.setAttribute("target", "_blank");
            a.setAttribute("rel", "noopener noreferrer");
        };
        // Capture phase so the attribute is set before Next's Link click handler reads it.
        document.addEventListener("click", onClick, true);
        return () => document.removeEventListener("click", onClick, true);
    }, []);
    return null;
}
