import Header from "./components/Header";
import Hero from "./components/Hero";
import TechTicker from "./components/TechTicker";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      id="top"
      className="relative min-h-dvh overflow-x-clip bg-[#050914] text-slate-100 selection:bg-blue-400/25 selection:text-blue-50"
    >
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-32 size-[26rem] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -right-40 top-[42rem] size-[30rem] rounded-full bg-cyan-500/8 blur-3xl" />
        <div className="absolute left-[38%] top-[125rem] size-[24rem] rounded-full bg-violet-500/8 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08),transparent_30%),linear-gradient(180deg,#050914_0%,#07101e_38%,#050914_100%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(255,255,255,0.14)_0.5px,transparent_0.5px)] [background-size:5px_5px]" />
      </div>

      <Header />

      <main>
        <Hero />
        <TechTicker />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
