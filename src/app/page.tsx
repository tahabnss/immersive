"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import KineticText from "@/components/KineticText";
import MagneticButton from "@/components/MagneticButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-accent text-sm font-body tracking-[0.3em] uppercase mb-6"
        >
          Spatial Design Studio
        </motion.p>

        <KineticText
          strength={8}
          className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold leading-[0.9] tracking-tight text-fg"
        >
          We Shape
          <br />
          <span className="text-accent">Dimensions</span>
        </KineticText>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 text-lg md:text-xl text-fg-muted font-body max-w-xl mx-auto leading-relaxed"
        >
          Pushing the boundaries of spatial interaction and immersive web experiences.
          Every pixel, a dimension. Every interaction, a discovery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <MagneticButton
            as="a"
            href="/work"
            className="relative px-8 py-4 bg-accent text-bg font-heading font-semibold text-sm tracking-wider uppercase overflow-hidden transition-all hover:bg-accent-dark"
          >
            Explore Work
          </MagneticButton>

          <MagneticButton
            as="a"
            href="/experiments"
            className="relative px-8 py-4 border border-border text-fg font-heading font-semibold text-sm tracking-wider uppercase overflow-hidden transition-all hover:border-accent"
          >
            Playground
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-fg-dim text-xs tracking-wider font-body">
          <span>Scroll to explore</span>
          <div className="w-px h-8 bg-border mt-1" />
        </div>
      </motion.div>
    </div>
  );
}
