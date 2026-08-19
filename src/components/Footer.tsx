import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-line/60 bg-gradient-to-b from-transparent to-white/[0.01]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Main CTA Section */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-green">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
              05 / Close
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-5xl">
              Let's build something that ships.
            </h2>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-muted">
              Open to senior full-stack and fintech engineering roles —
              remote or Lagos-based.
            </p>
          </div>

          {/* Primary Action Button */}
          <a
            href={`mailto:${profile.email || "momohdavid21@gmail.com"}`}
            className="group relative inline-flex w-fit items-center gap-3 overflow-hidden rounded bg-green px-6 py-3.5 font-mono text-sm font-semibold text-ink transition-all duration-200 hover:bg-green/90 hover:shadow-[0_0_20px_rgba(34,197,94,0.25)] active:scale-[0.98]"
          >
            <span>{profile.email || "momohdavid21@gmail.com"}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Bottom Metadata & Links Bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-line/60 pt-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2 text-muted">
            <span className="font-medium text-text">{profile.name}</span>
            <span className="text-line">•</span>
            <span>{profile.location}</span>
            <span className="text-line">•</span>
            <span>{profile.phone}</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`https://${profile.github}`}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-150 hover:text-green"
            >
              GitHub ↗
            </a>
            <a
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-150 hover:text-green"
            >
              LinkedIn ↗
            </a>
            <span className="rounded bg-line/40 px-2 py-1 text-[11px] text-muted/80">
              {profile.site}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}