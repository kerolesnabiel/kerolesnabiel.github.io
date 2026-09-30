import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  amount?: number;
};

const getVariants = (direction: RevealProps["direction"]): Variants => {
  const hidden = {
    opacity: 0,
    y: direction === "up" ? 32 : 0,
    x: direction === "left" ? -32 : direction === "right" ? 32 : 0,
    scale: direction === "scale" ? 0.96 : 1,
    filter: "blur(8px)",
  };

  return {
    hidden,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    },
  };
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  amount = 0.18,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={getVariants(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: "0px 0px -70px 0px" }}
      transition={{
        duration: 1.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
