import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mx-auto flex w-[calc(100%-2rem)] max-w-7xl flex-col gap-3 border-t border-white/5 py-8 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
      <span>© {new Date().getFullYear()} Keroles Nabil</span>
      <span></span>
      <a
        href="#top"
        className="inline-flex items-center gap-2 self-start text-slate-400 transition hover:text-white sm:self-auto"
        aria-label="Back to top"
      >
        Back to top
        <ArrowUp size={14} />
      </a>
    </footer>
  );
}
