"use client";

import { useEffect, useState } from "react";

const STATUS_MILESTONES = [
  { threshold: 22, text: "Initialising campus experience..." },
  { threshold: 48, text: "Powering up AI-First architecture..." },
  { threshold: 75, text: "Connecting Centres of Excellence..." },
  { threshold: 92, text: "Preparing research & academic hubs..." },
  { threshold: 100, text: "Welcome to Dayananda Sagar University" },
];

const SESSION_KEY = "dsu_first_load_completed";

export default function PageLoader() {
  const [phase, setPhase] = useState("show"); // "show" -> "hide" -> "gone"
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Avoid double-locking on re-render
    const body = document.body;
    body.classList.add("dsu-loader-active");

    const isRepeat = (() => {
      try {
        return sessionStorage.getItem(SESSION_KEY) === "1";
      } catch {
        return false;
      }
    })();

    const minDisplayTime = isRepeat ? 700 : 1350;
    const maxWaitTime = 3800; // Fail-safe fallback timeout
    const startTime = performance.now();
    let isFinished = false;
    const timeouts = [];

    // Smooth nonlinear progress simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        const delta = Math.max(0.4, (95 - prev) * 0.08);
        return Math.min(95, prev + delta);
      });
    }, 45);

    const completeLoader = () => {
      if (isFinished) return;
      isFinished = true;
      clearInterval(interval);

      const elapsed = performance.now() - startTime;
      const remainingWait = Math.max(0, minDisplayTime - elapsed);

      timeouts.push(
        setTimeout(() => {
          // Snap progress to 100%
          setProgress(100);

          timeouts.push(
            setTimeout(() => {
              // Initiate curtain split & release scroll lock
              setPhase("hide");
              body.classList.remove("dsu-loader-active");

              try {
                sessionStorage.setItem(SESSION_KEY, "1");
              } catch {
                /* noop */
              }

              // After curtains slide open completely (850ms), unmount
              timeouts.push(
                setTimeout(() => {
                  setPhase("gone");
                }, 900)
              );
            }, 300)
          );
        }, remainingWait)
      );
    };

    if (document.readyState === "complete") {
      completeLoader();
    } else {
      window.addEventListener("load", completeLoader, { once: true });
    }

    // Safety timeout ensures user is never blocked
    timeouts.push(setTimeout(completeLoader, maxWaitTime));

    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
      window.removeEventListener("load", completeLoader);
      body.classList.remove("dsu-loader-active");
    };
  }, []);

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

      {/* Cinematic split curtains with laser seam */}
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
            <svg
              className="dsu-torch-icon"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="dsu-flame-grad"
                  x1="32"
                  y1="6"
                  x2="32"
                  y2="44"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="50%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>
                <linearGradient
                  id="dsu-base-grad"
                  x1="16"
                  y1="44"
                  x2="48"
                  y2="58"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#dc2626" />
                  <stop offset="100%" stopColor="#b91c1c" />
                </linearGradient>
              </defs>
              {/* Luminous Torch Flame */}
              <path
                d="M32 6C32 6 38 15 38 22C38 25.5 36.5 28.5 34 30.5C36 30 38 28.5 39.5 26.5C42.5 30.5 43 35.5 40.5 39.5C38.5 42.5 35 44 32 44C29 44 25.5 42.5 23.5 39.5C21 35.5 21.5 30.5 24.5 26.5C26 28.5 28 30 30 30.5C27.5 28.5 26 25.5 26 22C26 15 32 6 32 6Z"
                fill="url(#dsu-flame-grad)"
              />
              <path
                d="M32 18C32 18 35 23 35 26C35 28 33.5 30 32 30C30.5 30 29 28 29 26C29 23 32 18 32 18Z"
                fill="#fef08a"
                opacity="0.95"
              />
              {/* Torch Pedestal */}
              <path
                d="M22 46C26 44.5 32 44 32 44C32 44 38 44.5 42 46C43.5 46.5 44 48 43 49.5L41.5 52C41 53 39.5 53.5 38.5 53.5H25.5C24.5 53.5 23 53 22.5 52L21 49.5C20 48 20.5 46.5 22 46Z"
                fill="url(#dsu-base-grad)"
              />
              <path
                d="M26 53.5L25 58H39L38 53.5H26Z"
                fill="#991b1b"
                opacity="0.85"
              />
            </svg>
            <span className="dsu-monogram">DSU</span>
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
