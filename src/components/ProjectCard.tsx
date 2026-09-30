import { ArrowUpRight, Check, Github, Layers3 } from "lucide-react";
import type { Project } from "../data/portfolio";

const accentStyles: Record<Project["accent"], string> = {
  blue: "from-blue-400/18 via-blue-500/5 to-transparent",
  violet: "from-violet-400/16 via-indigo-500/5 to-transparent",
  sky: "from-sky-400/18 via-cyan-500/5 to-transparent",
  cyan: "from-cyan-400/16 via-blue-500/5 to-transparent",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-blue-200/20 hover:bg-white/5">
      <div
        className={`pointer-events-none absolute inset-0 bg-linear-to-br ${accentStyles[project.accent]} opacity-80`}
      />

      <div className="relative">
        {/* Project image */}
        <div className="relative mx-3 mt-3 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50">
          <div
            className={`absolute inset-0 bg-linear-to-br ${accentStyles[project.accent]}`}
          />

          <img
            src={project.image}
            alt={project.title}
            className={`relative w-full object-cover object-center transition duration-500 group-hover:scale-[1.025] h-48 sm:h-48"`}
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.02),rgba(2,6,23,0.38))]" />

          <div className="absolute left-3 top-3 rounded-lg border border-white/10 bg-slate-950/45 px-2 py-1 font-mono text-[9px] tracking-[0.16em] text-slate-300 backdrop-blur-md">
            PROJECT / {project.number}
          </div>

          <div className="absolute right-3 top-3 grid size-8 place-items-center rounded-lg border border-white/10 bg-slate-950/45 text-slate-300 backdrop-blur-md">
            <Layers3 size={15} />
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-blue-300/75">
            {project.eyebrow}
          </p>

          <h3 className="mt-1.5 max-w-2xl text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
            {project.title}
          </h3>

          <p className="mt-3 max-w-3xl text-[13px] leading-6 text-slate-400">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/4 px-2 py-1 text-[10px] text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 grid gap-1.5 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-2 rounded-lg border border-white/5 bg-black/10 px-2.5 py-2 text-[11px] leading-4.5 text-slate-400"
              >
                <Check size={13} className="mt-0.5 shrink-0 text-blue-300" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/5 pt-3.5">
            <span className="text-[9px] uppercase tracking-[0.16em] text-slate-600">
              Built end-to-end
            </span>

            <div className="flex items-center gap-1.5">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/4 text-slate-300 transition hover:border-blue-200/20 hover:bg-white/8 hover:text-white"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <Github size={15} />
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-blue-300/15 bg-blue-400/8 px-2.5 text-[10px] font-semibold text-blue-100 transition hover:border-blue-200/30 hover:bg-blue-400/15"
                >
                  Live demo
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
