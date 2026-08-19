import { skillGroups } from "../data";
import { SectionHeading } from "./Experience";

export default function Skills() {
  return (
    <section id="watchlist" className="border-y border-line/60 bg-panel/30">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeading eyebrow="02 / Watchlist" title="Stack coverage" />
        <p className="mb-12 max-w-2xl text-sm md:text-base text-muted">
          What's actively used in production, grouped the way a watchlist
          groups instruments by sector.
        </p>

        {/* Watchlist Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="group flex flex-col justify-between rounded border border-line/60 bg-ink/90 p-6 transition-all duration-200 hover:border-amber/40 hover:bg-ink hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            >
              <div>
                {/* Sector Header */}
                <div className="mb-4 flex items-center justify-between border-b border-line/40 pb-3">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber">
                    {group.label}
                  </span>
                  <span className="font-mono text-[10px] text-muted/50">
                    [{group.items.length}]
                  </span>
                </div>

                {/* Instrument / Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-line/60 bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-text/80 transition-colors duration-150 group-hover:border-line group-hover:text-text hover:!border-green/50 hover:!bg-green/10 hover:!text-green"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status Footer */}
              <div className="mt-6 flex items-center justify-between font-mono text-[10px] text-muted/40">
                <span>SECTOR // ACTIVE</span>
                <span className="text-green/70">● LIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}