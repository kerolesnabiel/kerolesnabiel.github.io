import { Zap } from "lucide-react";
import { techStack } from "../data/portfolio";

export default function TechTicker() {
  const items = [...techStack, ...techStack];

  return (
    <section
      className="overflow-hidden border-y border-white/5 bg-white/2 py-4"
      aria-label="Technology stack"
    >
      <div className="flex min-w-max animate-[marquee_28s_linear_infinite] items-center gap-8 pl-8">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-500"
          >
            <Zap size={13} className="text-blue-300/70" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
