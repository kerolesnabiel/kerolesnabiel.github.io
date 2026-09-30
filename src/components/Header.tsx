import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems } from "../data/portfolio";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 mx-auto mt-3 w-[calc(100%-1.5rem)] max-w-7xl rounded-2xl border px-3 py-2 transition duration-300",
        scrolled
          ? "border-white/10 bg-slate-950/65 shadow-2xl shadow-black/20 backdrop-blur-2xl"
          : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-4">
        <a
          href="#top"
          className="group flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <span className="grid size-10 place-items-center rounded-xl border border-blue-300/20 bg-blue-400/10 text-sm font-black text-blue-100 shadow-lg shadow-blue-500/10 backdrop-blur-xl transition group-hover:border-blue-200/40 group-hover:bg-blue-400/15">
            KN
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-bold tracking-tight text-slate-100">
              Keroles Nabil
            </span>
            <span className="mt-0.5 block text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Backend / .NET
            </span>
          </span>
        </a>

        <nav
          className={[
            "absolute left-3 right-3 top-[calc(100%+0.5rem)] flex flex-col gap-1 rounded-2xl border border-white/10 bg-slate-950/90 p-2 shadow-2xl shadow-black/30 backdrop-blur-2xl md:static md:flex md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none",
            menuOpen ? "flex" : "hidden md:flex",
          ].join(" ")}
          aria-label="Primary navigation"
        >
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:kerolesnabiel@gmail.com"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100 transition hover:border-blue-200/40 hover:bg-blue-400/15"
          >
            Let’s talk
            <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-200 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
