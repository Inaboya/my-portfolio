import { tickerStats } from "../data";

export default function Ticker() {
  const items = [...tickerStats, ...tickerStats, ...tickerStats];

  return (
    <div className="relative overflow-hidden border-y border-line/60 bg-ink/90 py-2.5 backdrop-blur-sm">
      {/* Edge Gradient Mask for Smooth Infinite Scroll Effect */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-ink to-transparent" />

      {/* Marquee Track */}
      <div className="animate-ticker flex w-max items-center gap-8 hover:[animation-play-state:paused]">
        {items.map((stat, i) => {
          const isNegative = stat.value.startsWith("-");
          const isPositive = stat.value.startsWith("+");

          return (
            <div
              key={`${stat.label}-${i}`}
              className="flex items-center gap-3 whitespace-nowrap font-mono text-xs transition-colors duration-150 hover:opacity-80"
            >
              {/* Value Pill Badge */}
              <span
                className={`rounded border px-2 py-0.5 font-semibold text-[11px] ${
                  isNegative
                    ? "border-red-500/30 bg-red-500/10 text-red-400"
                    : isPositive
                    ? "border-green/30 bg-green/10 text-green"
                    : "border-amber/30 bg-amber/10 text-amber"
                }`}
              >
                {stat.value}
              </span>

              {/* Stat Label */}
              <span className="font-medium uppercase tracking-wider text-muted/90">
                {stat.label}
              </span>

              {/* Terminal Separator */}
              <span className="ml-5 text-line/50">///</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}