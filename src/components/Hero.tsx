import { ArrowDown, Circle, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

const nodes = [
  {
    label: ".NET",
    className: "left-[7%] top-[10%] size-14 sm:size-16 md:size-18",
    drift: "animate-[float_7s_ease-in-out_infinite]",
  },
  {
    label: "gRPC",
    className: "right-[8%] top-[17%] size-14 sm:size-[4.5rem] md:size-18",
    drift: "animate-[float_9s_ease-in-out_infinite_reverse]",
  },
  {
    label: "Redis",
    className: "bottom-[10%] left-[10%] size-14 sm:size-[4.5rem] md:size-18",
    drift: "animate-[float_8s_ease-in-out_infinite]",
  },
  {
    label: "MQ",
    className: "right-[12%] bottom-[10%] size-14 sm:size-16 md:size-18",
    drift: "animate-[float_10s_ease-in-out_infinite_reverse]",
  },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const visualY = useTransform(scrollY, [0, 600], [0, 70]);

  return (
    <section className="mx-auto grid min-h-150 w-[calc(100%-2rem)] max-w-7xl items-center gap-12 pb-20 pt-30 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/15 bg-blue-400/5 px-3 py-2 text-[11px] font-medium tracking-wide text-blue-100/80 backdrop-blur-xl">
          <span className="size-2 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(96,165,250,0.7)]" />
          Available for Backend / .NET opportunities
        </div>

        <h1 className="mt-7 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl">
          Building{" "}
          <span className="bg-linear-to-r from-blue-100 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            reliable backends
          </span>{" "}
          for products that need to move.
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          I’m Keroles — a .NET backend developer focused on clean architecture,
          distributed systems, real-time experiences, and production-minded
          engineering.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#work"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 px-5 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:via-blue-500 hover:to-cyan-400"
          >
            Explore my work
            <ArrowDown
              size={17}
              className="transition group-hover:translate-y-0.5"
            />
          </a>

          <a
            href="mailto:kerolesnabiel@gmail.com"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 text-sm font-semibold text-slate-100 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-blue-200/25 hover:bg-white/10"
          >
            <Mail size={17} />
            Email me
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-8 sm:gap-12">
          {[
            ["4", "featured builds"],
            [".NET 10", "primary stack"],
            ["∞", "curiosity"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-2xl font-semibold tracking-tight text-white">
                {value}
              </div>
              <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                {label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        style={{ y: visualY }}
        className="relative mx-auto w-full max-w-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 p-2.5 shadow-2xl shadow-blue-950/30 backdrop-blur-2xl sm:p-3 lg:max-w-md"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.14),transparent_40%)]" />

          <div className="relative rounded-3xl border border-white/10 bg-slate-950/35 p-3 backdrop-blur-xl sm:p-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-2.5 text-[9px] font-mono text-slate-500 sm:pb-3 sm:text-[10px]">
              <div className="flex gap-1">
                <span className="size-1.5 rounded-full bg-white/20" />
                <span className="size-1.5 rounded-full bg-white/20" />
                <span className="size-1.5 rounded-full bg-white/20" />
              </div>

              <span className="hidden sm:inline">
                system.design / portfolio
              </span>

              <span className="inline-flex items-center gap-1 text-blue-300">
                <Circle size={7} fill="currentColor" />
                live
              </span>
            </div>

            <div className="relative h-72 overflow-hidden sm:h-76">
              <div className="absolute left-1/2 top-[40%] size-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/25 bg-white/5 p-1 shadow-[0_0_70px_rgba(59,130,246,0.18)] backdrop-blur-xl sm:size-30">
                <div className="relative size-full overflow-hidden rounded-full">
                  <img
                    src="/profile.webp"
                    alt="Keroles Nabil"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_45%,rgba(59,130,246,0.12))]" />
                  <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
                </div>
              </div>

              {nodes.map((node) => (
                <div
                  key={node.label}
                  className={`absolute grid place-items-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_32%_20%,rgba(255,255,255,0.18),rgba(255,255,255,0.04)_38%,rgba(20,35,60,0.3)_80%)] font-mono text-[9px] font-bold text-slate-200 shadow-xl shadow-black/20 backdrop-blur-xl sm:text-[10px] ${node.className} ${node.drift}`}
                >
                  {node.label}
                </div>
              ))}

              <div className="absolute left-1/2 top-[65%] w-52 -translate-x-1/2 text-center sm:w-60">
                <span className="block font-mono text-[8px] tracking-[0.18em] text-slate-500 sm:text-[9px]">
                  KEROLES / BACKEND
                </span>
                <div className="mt-1 text-[11px] leading-5 text-slate-200 sm:text-xs">
                  <span className="block">Designing systems</span>
                  <span className="block">Not just endpoints</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-3 font-mono backdrop-blur-xl sm:p-3.5">
              <div className="flex items-center justify-between text-[9px] text-slate-600 sm:text-[10px]">
                <span>~/engineering-principles</span>
                <span>04</span>
              </div>

              <div className="mt-2 grid gap-1.5 text-[10px] text-slate-300 sm:mt-2.5 sm:gap-2 sm:text-[11px]">
                {[
                  "clean boundaries",
                  "observable workflows",
                  "resilient infrastructure",
                  "simple interfaces",
                ].map((item, index) => (
                  <div key={item} className="flex gap-3">
                    <span className="w-4 shrink-0 text-slate-600 sm:w-5">
                      0{index + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
