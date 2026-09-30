import { Sparkles } from "lucide-react";
import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="mx-auto w-[calc(100%-2rem)] max-w-7xl scroll-mt-24 py-16 mt-10"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-300/80">
          Selected work
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tighter text-white sm:text-5xl">
          Projects with{" "}
          <span className="bg-linear-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent">
            engineering depth.
          </span>
        </h2>
        <p className="mt-5 text-sm leading-7 text-slate-400">
          Systems I built end-to-end — from data models and APIs to
          infrastructure, realtime delivery and deployment.
        </p>
      </div>

      <div className="grid gap-16 md:grid-cols-2 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-8 grid gap-5 rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/10 backdrop-blur-2xl md:grid-cols-[auto_1fr_0.9fr] md:items-center">
        <div className="grid size-12 place-items-center rounded-2xl border border-blue-300/15 bg-blue-400/10 text-blue-200">
          <Sparkles size={18} />
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300/70">
            How I think
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-white">
            Make complexity visible, then make it smaller.
          </h3>
        </div>
        <p className="text-sm leading-6 text-slate-500">
          Clear boundaries, explicit workflows, and infrastructure choices that
          keep the hot path boring.
        </p>
      </div>
    </section>
  );
}
