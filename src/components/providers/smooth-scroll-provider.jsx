'use client';

/**
 * SmoothScrollProvider
 * ---------------------
 * Global smooth-scroll powered by Lenis (v1.x).
 *
 * Uses `lenis/react` ReactLenis component with `root` prop set to `true`
 * so it attaches directly to the window / html element — no wrapper divs
 * needed, and all existing layout structure stays intact.
 *
 * Options tuned for a premium, buttery feel:
 *  - lerp 0.08        → momentum-heavy, studio-grade inertia
 *  - smoothWheel true → silky mouse-wheel interpolation
 *  - duration 1.2     → generous duration for a cinematic feel
 *  - easing           → custom cubic-bezier for natural deceleration
 *  - syncTouch true   → mirrors the native iOS momentum on touch devices
 */

import { ReactLenis } from 'lenis/react';

/**
 * Quintic-out easing — buttery, weighted deceleration.
 * The scroll feels like it's gliding to a stop, not snapping.
 * Used by Studio Freight originals and top-tier agency sites.
 */
const ease = (t) => 1 - Math.pow(1 - t, 5);

const LENIS_OPTIONS = {
  duration: 1.6,             // generous momentum — premium, cinematic feel
  easing: ease,
  smoothWheel: true,         // silky mouse-wheel interpolation
  syncTouch: true,           // native-feel momentum on iOS / touch
  touchMultiplier: 1.5,      // responsive touch tracking
  infinite: false,
  autoRaf: true,             // Lenis owns the rAF loop — no manual tick needed
};

export default function SmoothScrollProvider({ children }) {
  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  );
}
