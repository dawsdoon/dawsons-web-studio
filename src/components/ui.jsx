import React from "react";
import { motion } from "framer-motion";

export function SectionReveal({ children, className = "", id, revealOnMount = false }) {
  const revealProps = revealOnMount
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.18 } };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 38 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={className}
      {...revealProps}
    >
      {children}
    </motion.section>
  );
}

export function FadeIn({ children, className = "", delay = 0, y = 24, revealOnMount = false }) {
  const revealProps = revealOnMount
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } };

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
      {...revealProps}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ eyebrow, title, description, centered = true, revealOnMount = false }) {
  return (
    <FadeIn revealOnMount={revealOnMount} className={`mb-12 md:mb-14 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight md:text-5xl">{title}</h2>
      {description && <p className={`mt-4 text-lg leading-8 text-slate-300 ${centered ? "mx-auto max-w-2xl" : ""}`}>{description}</p>}
    </FadeIn>
  );
}

export const glassCardClass =
  "group relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.03] shadow-xl shadow-black/30 backdrop-blur-xl ring-1 ring-white/10 transition duration-300 hover:border-cyan-200/35 hover:shadow-2xl hover:shadow-cyan-500/10";
