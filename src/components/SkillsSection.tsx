import { motion } from "motion/react";
import { skillGroups } from "../data/portfolio";
import Reveal from "./Reveal";
import type { Variants } from "motion/react";

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SkillsSection() {
  return (
    <section
      id="stack"
      className="mx-auto w-[calc(100%-2rem)] max-w-7xl scroll-mt-24 py-16"
    >
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-300/80">
          Engineering stack
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tighter text-white sm:text-5xl">
          Tools I use to{" "}
          <span className="bg-linear-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent">
            ship systems.
          </span>
        </h2>
        <p className="mt-5 text-sm leading-7 text-slate-400">
          A practical stack centered around C#, .NET, PostgreSQL/SQL Server,
          messaging, cloud storage and modern frontend tooling.
        </p>
      </Reveal>

      <motion.div
        className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
        variants={cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12, margin: "0px 0px -80px 0px" }}
      >
        {skillGroups.map(({ icon: Icon, title, items }) => (
          <motion.article
            key={title}
            variants={cardItem}
            className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-xl shadow-black/10 backdrop-blur-2xl transition hover:border-blue-200/15 hover:bg-white/5"
          >
            <div className="grid size-10 place-items-center rounded-xl border border-blue-300/15 bg-blue-400/10 text-blue-200">
              <Icon size={18} />
            </div>
            <h3 className="mt-5 text-sm font-semibold text-white">{title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/8 bg-white/[0.035] px-2.5 py-1.5 text-[11px] text-slate-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
