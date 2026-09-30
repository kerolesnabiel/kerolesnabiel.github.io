import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto flex w-full px-10 max-w-7xl flex-row justify-between border-t border-white/5 py-8 text-xs text-slate-600"
    >
      <span>© {new Date().getFullYear()} Keroles Nabil</span>
      <span />
      <a
        href="#top"
        className="inline-flex items-center gap-2 self-start text-slate-400 transition hover:text-white sm:self-auto"
        aria-label="Back to top"
      >
        Back to top
        <ArrowUp size={14} />
      </a>
    </motion.footer>
  );
}
