import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
      <div className="flex flex-col gap-6">
        {/* Availability Badge */}
        <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-green/20 bg-green/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-widest text-green">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
          </span>
          Open to new roles · {profile.location}
        </div>

        {/* Hero Headline */}
        <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-text sm:text-6xl md:text-7xl lg:text-8xl">
          {profile.name}
        </h1>

        {/* Role & Industry Tags */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-lg sm:text-xl">
          <span className="font-semibold text-amber">{profile.role}</span>
          <span className="text-line">//</span>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted sm:text-sm">
            <span className="rounded bg-white/[0.04] px-2 py-0.5 border border-line/40">fintech</span>
            <span className="rounded bg-white/[0.04] px-2 py-0.5 border border-line/40">agritech</span>
            <span className="rounded bg-white/[0.04] px-2 py-0.5 border border-line/40">web3</span>
          </div>
        </div>

        {/* Summary Description */}
        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.summary}
        </p>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-sm">
          <a
            href={`mailto:${profile.email || "momohdavid21@gmail.com"}`}
            className="group inline-flex items-center gap-2 rounded bg-green px-5 py-3 font-semibold text-ink transition-all duration-200 hover:bg-green/90 hover:shadow-[0_0_20px_rgba(34,197,94,0.25)] active:scale-[0.98]"
          >
            <span>Get in touch</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>

          <a
            href={`https://${profile.github}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded border border-line/80 bg-white/[0.01] px-5 py-3 text-text transition-all duration-200 hover:border-green/80 hover:bg-green/5 hover:text-green active:scale-[0.98]"
          >
            <span>GitHub</span>
            <span className="text-xs text-muted/70">↗</span>
          </a>

          <a
            href={`https://${profile.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded border border-line/80 bg-white/[0.01] px-5 py-3 text-text transition-all duration-200 hover:border-green/80 hover:bg-green/5 hover:text-green active:scale-[0.98]"
          >
            <span>LinkedIn</span>
            <span className="text-xs text-muted/70">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}