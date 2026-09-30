import { motion, useScroll } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-60 h-px origin-left bg-linear-to-r from-blue-400 via-cyan-300 to-blue-500 shadow-[0_0_14px_rgba(96,165,250,0.65)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
