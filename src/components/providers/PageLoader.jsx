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
  const timersRef = useRef([]);

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  // Safe dismiss function: smoothly opens curtains and cleans up
  const dismissLoader = useCallback((minHoldMs = 150) => {
    setProgress(100);
    const body = typeof document !== "undefined" ? document.body : null;

    const t1 = setTimeout(() => {
      setPhase("hide");
      if (body) {
        body.classList.remove("dsu-loader-active");
      }

      const t2 = setTimeout(() => {
        setPhase("gone");
      }, 800);
      timersRef.current.push(t2);
    }, minHoldMs);

    timersRef.current.push(t1);
  }, []);

  // 1. Initial Page Load (runs smoothly on initial mount / page refresh, never hangs)
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
      const minDisplayTime = 750;
      const wait = Math.max(0, minDisplayTime - elapsed);

      const t = setTimeout(() => {
        dismissLoader(150);
      }, wait);
      timersRef.current.push(t);
    };

    if (document.readyState === "complete" || document.readyState === "interactive") {
      onInitialReady();
    } else {
      window.addEventListener("DOMContentLoaded", onInitialReady, { once: true });
      window.addEventListener("load", onInitialReady, { once: true });
    }

    // Fail-safe ceiling ensures user is never blocked on ANY page
    const failSafe = setTimeout(onInitialReady, 2200);
    timersRef.current.push(failSafe);

    return () => {
      clearInterval(interval);
      clearAllTimers();
      window.removeEventListener("DOMContentLoaded", onInitialReady);
      window.removeEventListener("load", onInitialReady);
      body.classList.remove("dsu-loader-active");
    };
  }, [clearAllTimers, dismissLoader]);

  // 2. Genuine Page & Tab Redirection (fires ONLY when pathname changes, NEVER on in-page <a> clicks)
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;

      // Real route or tab redirection has occurred
      clearAllTimers();
      setProgress(60);
      setPhase("show");

      const t = setTimeout(() => {
        dismissLoader(120);
      }, 160);
      timersRef.current.push(t);
    }
  }, [pathname, clearAllTimers, dismissLoader]);

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
          <p className="dsu-univ-name">Dayananda Sagar University</p>
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
