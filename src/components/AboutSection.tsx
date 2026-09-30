import {
  ArrowUpRight,
  BriefcaseBusiness,
  Github,
  Linkedin,
  Mail,
  type LucideIcon,
} from "lucide-react";

const socialLinks: Array<{ label: string; href: string; icon: LucideIcon }> = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/kerolesnabil",
    icon: Linkedin,
  },
  { label: "GitHub", href: "https://github.com/kerolesnabiel", icon: Github },
  { label: "Email", href: "mailto:kerolesnabiel@gmail.com", icon: Mail },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto w-[calc(100%-2rem)] max-w-7xl scroll-mt-24 py-16"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-300/80">
            About me
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tighter text-white sm:text-5xl">
            Backend engineering with a{" "}
            <span className="bg-linear-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent">
              product mindset.
            </span>
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-400">
            I’m interested in the part of software where architecture meets real
            user behavior: authentication flows, data consistency, cache
            strategy, background processing, realtime delivery, and the
            trade-offs between them.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-400">
            My goal is straightforward: build software that is easy to reason
            about today and still pleasant to change six months from now.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => {
              return (
                <a
                  key={String(label)}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-3.5 py-2.5 text-xs font-semibold text-slate-300 transition hover:border-blue-200/20 hover:bg-white/6 hover:text-white"
                >
                  <Icon size={15} />
                  {label}
                  <ArrowUpRight size={13} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/10 backdrop-blur-2xl">
          <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative flex items-center justify-between border-b border-white/5 pb-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-500">
              Profile / 2026
            </span>
            <BriefcaseBusiness size={17} className="text-blue-300" />
          </div>

          <div className="relative mt-5 grid gap-4 sm:grid-cols-2">
            {[
              ["Focus", "Backend + distributed systems"],
              ["Education", "Bachelor in Education Technology"],
              ["University", "Minia University · Egypt"],
              ["Certifications", "GitHub Foundations · Docker Foundations"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/5 bg-black/10 p-4"
              >
                <span className="block text-[10px] uppercase tracking-[0.16em] text-slate-600">
                  {label}
                </span>
                <strong className="mt-2 block text-sm leading-6 text-slate-200">
                  {value}
                </strong>
              </div>
            ))}
          </div>

          <div className="relative mt-3 rounded-2xl border border-blue-300/10 bg-blue-400/4 p-5">
            <div className="text-4xl leading-none text-blue-300/70">“</div>
            <p className="text-sm text-slate-300">
              Keep the architecture explicit. Keep the interfaces small. Keep
              learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
