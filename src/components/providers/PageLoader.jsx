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
