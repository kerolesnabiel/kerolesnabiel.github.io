import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import type { Variants } from "motion/react";

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(7px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="mx-auto mt-10 w-[calc(100%-2rem)] max-w-7xl scroll-mt-24 py-16"
    >
      <Reveal className="mx-auto max-w-3xl text-center">
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
      </Reveal>

      <motion.div
        className="mt-10 grid gap-8 md:grid-cols-2"
        variants={cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12, margin: "0px 0px -80px 0px" }}
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={cardItem}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      <Reveal delay={0.15} direction="scale" className="mt-8">
        <div className="grid gap-5 rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/10 backdrop-blur-2xl md:grid-cols-[auto_1fr_0.9fr] md:items-center">
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
            Clear boundaries, explicit workflows, and infrastructure choices
            that keep the hot path boring.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
