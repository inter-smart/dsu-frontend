'use client';
import { ReactLenis } from 'lenis/react';

const ease = (t) => 1 - Math.pow(1 - t, 5);

const LENIS_OPTIONS = {
  duration: 1.6,             
  easing: ease,
  smoothWheel: true,         
  syncTouch: true,         
  touchMultiplier: 1.5,     
  infinite: false,
  autoRaf: true,            
};

export default function SmoothScrollProvider({ children }) {
  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  );
}
