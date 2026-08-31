"use client";

import { useRef } from "react";
import { useCountUp } from "react-countup";

export default function ClientCountUp({
  start = 0,
  end = 0,
  duration = 2.5,
  separator = ",",
  suffix = "+",
  prefix = "",
  decimals = 0,
  decimal = ".",
  enableScrollSpy = false,
  scrollSpyDelay,
  scrollSpyOnce,
  onStart,
  onEnd,
  onPauseResume,
  onReset,
  onUpdate,
}) {
  const ref = useRef(null);

  useCountUp({
    ref,
    start,
    end,
    duration,
    separator,
    suffix,
    prefix,
    decimals,
    decimal,
    enableScrollSpy,
    scrollSpyDelay,
    scrollSpyOnce,
    onStart,
    onEnd,
    onPauseResume,
    onReset,
    onUpdate,
  });

  return (
    <span ref={ref}>{start}</span>
  );
}
