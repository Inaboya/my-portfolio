import { certifications, community, education, publications } from "../data";
import { SectionHeading } from "./Experience";

export default function Profile() {
  return (
    <section id="profile" className="border-t border-line/60 bg-panel/30">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeading eyebrow="04 / Profile" title="Filings & disclosures" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Column 1: Certifications */}
          <div className="group rounded border border-line/60 bg-white/[0.01] p-6 transition-all duration-200 hover:border-amber/40 hover:bg-white/[0.02]">
            <div className="mb-6 flex items-center justify-between border-b border-line/40 pb-3">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-amber">
                Certifications
              </h3>
              <span className="font-mono text-[10px] text-muted/60">[VERIFIED]</span>
            </div>

            <ul className="flex flex-col gap-5">
              {certifications.map((c) => (
                <li key={c.label} className="border-l-2 border-line/60 pl-3.5 transition-colors duration-200 group-hover:border-amber/60">
                  <p className="text-sm font-medium leading-snug text-text">
                    {c.label}
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {c.meta}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Publications & Community */}
          <div className="group rounded border border-line/60 bg-white/[0.01] p-6 transition-all duration-200 hover:border-amber/40 hover:bg-white/[0.02]">
            <div className="mb-6 flex items-center justify-between border-b border-line/40 pb-3">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-amber">
                Publications & Community
              </h3>
              <span className="font-mono text-[10px] text-muted/60">[PUBLIC]</span>
            </div>

            <ul className="flex flex-col gap-5">
              {publications.map((p) => (
                <li key={p.title} className="border-l-2 border-line/60 pl-3.5 transition-colors duration-200 group-hover:border-amber/60">
                  <p className="text-sm font-medium leading-snug text-text">
                    {p.title}
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {p.meta}
                  </p>
                </li>
              ))}
              <li className="border-l-2 border-line/60 pl-3.5 transition-colors duration-200 group-hover:border-amber/60">
                <p className="text-sm font-medium leading-snug text-text">Mentorship</p>
                <p className="mt-1 font-mono text-xs text-muted">{community}</p>
              </li>
            </ul>
          </div>

          {/* Column 3: Education */}
          <div className="group flex flex-col justify-between rounded border border-line/60 bg-white/[0.01] p-6 transition-all duration-200 hover:border-amber/40 hover:bg-white/[0.02]">
            <div>
              <div className="mb-6 flex items-center justify-between border-b border-line/40 pb-3">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-amber">
                  Education
                </h3>
                <span className="font-mono text-[10px] text-muted/60">[RECORDED]</span>
              </div>

              <div className="border-l-2 border-line/60 pl-3.5 transition-colors duration-200 group-hover:border-amber/60">
                <p className="text-base font-medium leading-snug text-text">
                  {education.degree}
                </p>
                <p className="mt-1.5 text-sm font-medium text-text/80">
                  {education.school}
                </p>
                <p className="mt-2 font-mono text-xs text-muted">
                  {education.years}
                </p>
              </div>
            </div>

            {/* Terminal Status Stamp */}
            <div className="mt-8 border-t border-line/40 pt-4 font-mono text-[11px] text-muted/70">
              <span className="text-green">✓</span> All credentials active & verified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}