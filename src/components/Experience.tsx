import { experience } from "../data";

export default function Experience() {
  return (
    <section id="log" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <SectionHeading eyebrow="01 / Log" title="Trade log" />
      <p className="mb-12 max-w-2xl text-sm md:text-base text-muted">
        Every role, in order, with what actually shipped — labeled the way a
        position sheet would label it.
      </p>

      <div className="flex flex-col divide-y divide-line/60 border-y border-line/60">
        {experience.map((role) => (
          <article
            key={role.ticker}
            className="group grid grid-cols-1 gap-8 py-10 transition-colors duration-200 hover:bg-white/[0.02] md:grid-cols-[240px_1fr] md:gap-12 md:p-8"
          >
            {/* Left Column: Role Metadata */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="inline-block rounded bg-green/10 px-2 py-0.5 font-mono text-xs font-semibold text-green">
                  {role.ticker}
                </div>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-text">
                  {role.company}
                </h3>
                <div className="mt-1 text-sm font-medium text-text/80">{role.role}</div>
              </div>

              <div className="mt-6 flex flex-col gap-1 font-mono text-xs text-muted">
                <span>{role.start} — {role.end}</span>
                <span>{role.location}</span>
              </div>
            </div>

            {/* Right Column: Key Metrics / Bullets */}
            <ul className="grid gap-6 sm:grid-cols-1">
              {role.bullets.map((bullet) => (
                <li 
                  key={bullet.label} 
                  className="relative border-l-2 border-line/80 pl-5 transition-colors duration-200 group-hover:border-amber/80"
                >
                  <div className="font-mono text-xs font-semibold uppercase tracking-wider text-amber">
                    {bullet.label}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {bullet.detail}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-green">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
        {eyebrow}
      </div>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}