import { projects } from "../data";
import { SectionHeading } from "./Experience";

const tagStyles: Record<string, string> = {
  Fintech: "border-green/30 bg-green/10 text-green",
  Agritech: "border-amber/30 bg-amber/10 text-amber",
  Product: "border-text/20 bg-text/5 text-text",
};

export default function Projects() {
  return (
    <section id="positions" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <SectionHeading eyebrow="03 / Positions" title="Shipped projects" />
      <p className="mb-12 max-w-2xl text-sm md:text-base text-muted">
        Products taken from build to production, not prototypes left on a
        branch.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col justify-between rounded border border-line/60 bg-panel/40 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-green/50 hover:bg-panel/80 hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)] active:scale-[0.99]"
          >
            <div>
              {/* Header: Project Title & Tag Badge */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-medium tracking-tight text-text transition-colors duration-200 group-hover:text-green">
                  {project.name}
                </h3>
                <span
                  className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${
                    tagStyles[project.tag] ?? "border-line/40 bg-white/[0.03] text-muted"
                  }`}
                >
                  {project.tag}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
            </div>

            {/* Footer: Tech Stack Terminal Tag & Directional Arrow */}
            <div className="mt-6 flex items-center justify-between border-t border-line/40 pt-4 font-mono text-xs text-muted/80">
              <span className="truncate pr-2">{project.stack}</span>
              <span className="shrink-0 text-muted/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-green">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}