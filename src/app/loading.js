export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading page"
      className="flex min-h-[65vh] w-full flex-col items-center justify-center gap-4 px-4"
    >
      <div className="relative flex h-16 w-16 items-center justify-center" aria-hidden="true">
        {/* Ambient pulsing glow */}
        <div className="absolute inset-0 rounded-full bg-red-600/20 blur-md dark:bg-red-500/30 animate-pulse" />

        {/* Outer orbital gradient ring */}
        <div
          className="absolute inset-0 animate-spin rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, #dc2626 45%, #f97316 90%, #fb923c 100%)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
            mask:
              "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
            animationDuration: "1.4s",
          }}
        />

        {/* Inner reverse dashed ring */}
        <div
          className="absolute inset-2 animate-spin rounded-full border border-dashed border-orange-500/40"
          style={{ animationDirection: "reverse", animationDuration: "3.5s" }}
        />

        {/* Core emblem with DSU monogram */}
        <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-red-500/20 bg-white/95 shadow-sm backdrop-blur-sm dark:border-red-500/30 dark:bg-zinc-900/95">
          <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-[10px] font-black tracking-widest text-transparent">
            DSU
          </span>
        </div>
      </div>

      {/* University Route Transition Status */}
      <div className="flex flex-col items-center text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300">
          Dayananda Sagar University
        </span>
        <span className="text-[11px] font-medium text-gray-400 dark:text-gray-500">
          Loading content...
        </span>
      </div>
    </div>
  );
}
