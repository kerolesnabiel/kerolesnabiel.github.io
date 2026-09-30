import { Github, Mail } from "lucide-react";
import { motion } from "motion/react";
import Reveal from "./Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-[calc(100%-2rem)] max-w-7xl scroll-mt-24 py-16">
      <Reveal direction="scale">
        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.25 }} className="relative overflow-hidden rounded-4xl border border-blue-300/15 bg-linear-to-br from-blue-500/8 via-white/[0.035] to-cyan-500/6 p-8 shadow-2xl shadow-blue-950/30 backdrop-blur-2xl sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 size-64 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-300/80">Start a conversation</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tighter text-white sm:text-5xl">Have a backend challenge worth solving?</h2>
            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">Whether it’s a .NET role, a backend-heavy product, or a system that needs a cleaner shape — I’d love to hear about it.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }} href="mailto:kerolesnabiel@gmail.com" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 px-5 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition hover:from-blue-500 hover:via-blue-500 hover:to-cyan-400">
                Email Me
                <Mail size={17} />
              </motion.a>
              <motion.a whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }} href="https://github.com/kerolesnabiel" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 text-sm font-semibold text-slate-100 transition hover:border-blue-200/20 hover:bg-white/10">
                <Github size={17} />
                View GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}
