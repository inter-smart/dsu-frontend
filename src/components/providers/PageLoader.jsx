"use client";

import { useEffect, useState } from "react";

const LOGO_SRC = "/images/dsu-logo.svg";
const MIN_VISIBLE_MS = 1500; // minimum time the loader stays visible
const MAX_WAIT_MS = 5000;    // never trap the user behind the loader

const STATUS = [
  [30, "Initialising campus experience"],
  [60, "Powering up the AI Factory"],
  [90, "Loading Centres of Excellence"],
  [101, "Almost there"],
];

export default function PageLoader() {
  const [phase, setPhase] = useState("show"); // show -> hide -> gone
  const [progress, setProgress] = useState(0);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const start = performance.now();
    let finished = false;
    const timers = [];

    root.style.overflow = "hidden";

    const tick = setInterval(() => {
      setProgress((p) => (p < 90 ? p + (90 - p) * 0.07 + 0.4 : p));
    }, 80);

    const finish = () => {
      if (finished) return;
      finished = true;
      clearInterval(tick);
      const wait = Math.max(0, MIN_VISIBLE_MS - (performance.now() - start));
      timers.push(
        setTimeout(() => {
          setProgress(100);
          timers.push(
            setTimeout(() => {
              setPhase("hide");
              root.style.overflow = "";
              try { sessionStorage.setItem("dsu-loaded", "1"); } catch {}
              timers.push(setTimeout(() => setPhase("gone"), 1000));
            }, 500)
          );
        }, wait)
      );
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    timers.push(setTimeout(finish, MAX_WAIT_MS));

    return () => {
      clearInterval(tick);
      timers.forEach(clearTimeout);
      window.removeEventListener("load", finish);
      root.style.overflow = "";
    };
  }, []);

  if (phase === "gone") return null;
  const hiding = phase === "hide";
  const status = STATUS.find(([limit]) => progress < limit)?.[1];

  return (
    <div
      id="dsu-loader"
      role="status"
      aria-live="polite"
      aria-label="Loading"
      style={{ pointerEvents: hiding ? "none" : "auto" }}
    >
      {/* Curtain halves */}
      <div className={`dsu-panel dsu-panel-top ${hiding ? "is-open" : ""}`} />
      <div className={`dsu-panel dsu-panel-bottom ${hiding ? "is-open" : ""}`} />

      {/* Content */}
      <div className={`dsu-content ${hiding ? "is-hidden" : ""}`}>
        {/* Emblem */}
        <div className="dsu-emblem">
          <span className="dsu-ripple" />
          <span className="dsu-ripple dsu-ripple-2" />
          <span className="dsu-ring dsu-ring-outer" />
          <span className="dsu-ring dsu-ring-inner" />
          <span className="dsu-orbit"><span className="dsu-dot" /></span>
          <div className="dsu-badge">
            {logoFailed ? (
              <span className="dsu-mono">DSU</span>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={LOGO_SRC} alt="" onError={() => setLogoFailed(true)} />
            )}
          </div>
        </div>

        {/* Tagline */}
        <div className="dsu-text">
          <p className="dsu-tag dsu-rise" style={{ animationDelay: "0.1s" }}>
            India&apos;s AI-First University
          </p>
        </div>

        {/* Progress */}
        <div className="dsu-progress-wrap dsu-rise" style={{ animationDelay: "0.5s" }}>
          <div className="dsu-track">
            <div className="dsu-bar" style={{ width: `${progress}%` }} />
          </div>
          <div className="dsu-meta">
            <span>{status}</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}