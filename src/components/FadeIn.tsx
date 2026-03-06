"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  direction?: "up" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
};

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
}: Props) {
  const directionOffset = {
    up: { y: 30 },
    left: { x: -30 },
    right: { x: 30 },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
