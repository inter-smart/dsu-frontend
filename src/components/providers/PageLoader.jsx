"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

const STATUS_MILESTONES = [
  { threshold: 22, text: "Initialising campus experience..." },
  { threshold: 48, text: "Powering up AI-First architecture..." },
  { threshold: 75, text: "Connecting Centres of Excellence..." },
  { threshold: 92, text: "Preparing research & academic hubs..." },
  { threshold: 100, text: "Welcome to Dayananda Sagar University" },
];

export default function PageLoader() {
  const pathname = usePathname();
  const [phase, setPhase] = useState("show"); // "show" -> "hide" -> "gone"
  const [progress, setProgress] = useState(0);

  const prevPathnameRef = useRef(pathname);
  const isNavigatingRef = useRef(false);
  const transitionStartRef = useRef(0);
  const timersRef = useRef([]);

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  // Safe dismiss function: smoothly opens curtains and cleans up
  const dismissLoader = useCallback((minHoldMs = 180) => {
    setProgress(100);
    const body = typeof document !== "undefined" ? document.body : null;

    const t1 = setTimeout(() => {
      setPhase("hide");
      if (body) {
        body.classList.remove("dsu-loader-active");
      }
      isNavigatingRef.current = false;

      const t2 = setTimeout(() => {
        setPhase("gone");
      }, 850);
      timersRef.current.push(t2);
    }, minHoldMs);

    timersRef.current.push(t1);
  }, []);

  // 1. Initial Page Load (works 100% reliably on ANY page, never hangs)
  useEffect(() => {
    const body = document.body;
    body.classList.add("dsu-loader-active");

    const startTime = performance.now();
    let completed = false;

    // Smooth nonlinear progress simulation towards 95%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        const delta = Math.max(0.5, (95 - prev) * 0.08);
        return Math.min(95, prev + delta);
      });
    }, 40);

    const onInitialReady = () => {
      if (completed) return;
      completed = true;
      clearInterval(interval);

      const elapsed = performance.now() - startTime;
      const minDisplayTime = 800; // snappier so it never feels slow
      const wait = Math.max(0, minDisplayTime - elapsed);

      const t = setTimeout(() => {
        dismissLoader(180);
      }, wait);
      timersRef.current.push(t);
    };

    // If document is already interactive or complete, wrap up smoothly
    if (document.readyState === "complete" || document.readyState === "interactive") {
      onInitialReady();
    } else {
      window.addEventListener("DOMContentLoaded", onInitialReady, { once: true });
      window.addEventListener("load", onInitialReady, { once: true });
    }

    // Safety fallback ensures user is NEVER blocked on ANY page even if external assets hang
    const failSafe = setTimeout(onInitialReady, 2400);
    timersRef.current.push(failSafe);

    return () => {
      clearInterval(interval);
      clearAllTimers();
      window.removeEventListener("DOMContentLoaded", onInitialReady);
      window.removeEventListener("load", onInitialReady);
      body.classList.remove("dsu-loader-active");
    };
  }, [clearAllTimers, dismissLoader]);

  // 2. Intercept Internal Link Clicks & Browser History for Seamless Route Transitions
  useEffect(() => {
    const startTransition = () => {
      clearAllTimers();
      isNavigatingRef.current = true;
      transitionStartRef.current = performance.now();
      setProgress(25);
      setPhase("show");

      // Progressively advance towards 85% while route loads
      const interval = setInterval(() => {
        if (!isNavigatingRef.current) {
          clearInterval(interval);
          return;
        }
        setProgress((prev) => {
          if (prev >= 85) return prev;
          return prev + Math.max(0.6, (85 - prev) * 0.1);
        });
      }, 50);

      // Safety fallback: if navigation takes longer than 2500ms, dismiss gracefully
      const safety = setTimeout(() => {
        clearInterval(interval);
        if (isNavigatingRef.current) {
          dismissLoader(100);
        }
      }, 2500);
      timersRef.current.push(safety);
    };

    const handleAnchorClick = (e) => {
      if (e.defaultPrevented) return;

      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore external, download, protocols, or new-tab navigations
      if (
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:") ||
        href.startsWith("#") ||
        e.ctrlKey ||
        e.metaKey ||
        e.altKey ||
        e.shiftKey
      ) {
        return;
      }

      // Check URL against current location
      try {
        const targetUrl = new URL(anchor.href, window.location.origin);
        if (targetUrl.origin !== window.location.origin) return;
        // If clicking link to the exact same page & search, don't trigger loader
        if (
          targetUrl.pathname === window.location.pathname &&
          targetUrl.search === window.location.search
        ) {
          return;
        }

        startTransition();
      } catch {
        /* invalid URL, ignore */
      }
    };

    const handlePopState = () => {
      startTransition();
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      window.removeEventListener("popstate", handlePopState);
    };
  }, [clearAllTimers, dismissLoader]);

  // 3. Listen to Route Changes (pathname) to finish transition and reveal new page
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;

      if (isNavigatingRef.current) {
        // Minimum visible duration so transition is smooth without jarring flashes
        const elapsed = performance.now() - transitionStartRef.current;
        const hold = Math.max(0, 320 - elapsed);

        const t = setTimeout(() => {
          dismissLoader(150);
        }, hold);
        timersRef.current.push(t);
      }
    }
  }, [pathname, dismissLoader]);

  if (phase === "gone") return null;

  const isHiding = phase === "hide";
  const currentStatus =
    STATUS_MILESTONES.find((m) => progress <= m.threshold)?.text ||
    "Loading...";

  return (
    <aside
      id="dsu-loader"
      role="status"
      aria-live="polite"
      aria-label="Loading Dayananda Sagar University"
      style={{ pointerEvents: isHiding ? "none" : "auto" }}
    >
      {/* Background ambient lighting & AI grid texture */}
      <div className="dsu-backdrop" />
      <div className="dsu-grid-pattern" />

      {/* Cinematic split curtains */}
      <div
        className={`dsu-panel dsu-panel-top ${isHiding ? "is-open" : ""}`}
        aria-hidden="true"
      />
      <div
        className={`dsu-panel dsu-panel-bottom ${isHiding ? "is-open" : ""}`}
        aria-hidden="true"
      />

      {/* Center branded contents */}
      <div className={`dsu-content ${isHiding ? "is-hidden" : ""}`}>
        {/* Orbital Emblem Core */}
        <div className="dsu-emblem" aria-hidden="true">
          <span className="dsu-aura" />
          <span className="dsu-ring-outer" />
          <span className="dsu-ring-inner" />
          <span className="dsu-orbit">
            <span className="dsu-dot" />
          </span>

          <div className="dsu-badge">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-emblem.png"
              alt="Dayananda Sagar University"
              className="dsu-emblem-img"
              width={76}
              height={76}
            />
          </div>
        </div>

        {/* University Brand & AI-First Recognition */}
        <div className="dsu-identity">
          <h1 className="dsu-univ-name">Dayananda Sagar University</h1>
          <div className="dsu-ai-badge">
            <span className="dsu-signal-dot" />
            <span>India&apos;s AI-First University</span>
          </div>
        </div>

        {/* Precision Progress Bar */}
        <div className="dsu-progress-wrap">
          <div className="dsu-track">
            <div
              className="dsu-bar"
              style={{ width: `${Math.min(100, progress)}%` }}
            />
          </div>
          <div className="dsu-meta">
            <span className="dsu-status-text">{currentStatus}</span>
            <span className="dsu-pct">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
