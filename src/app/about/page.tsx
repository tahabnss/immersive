"use client";

import { motion } from "framer-motion";
import KineticText from "@/components/KineticText";

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-accent text-sm font-body tracking-[0.3em] uppercase mb-4">
            About
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <KineticText
              strength={8}
              className="text-4xl md:text-7xl font-heading font-bold text-fg leading-[0.95]"
            >
              We build
              <br />
              <span className="text-accent">impossible</span>
              <br />
              things.
            </KineticText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6 text-fg-muted font-body text-lg leading-relaxed"
          >
            <p>
              We are a small studio obsessed with the intersection of technology,
              space, and human perception. Every project starts with a question:
              what if the browser could feel like another dimension?
            </p>
            <p>
              Our work spans interactive installations, WebGL experiences,
              generative art, and spatial design. We collaborate with artists,
              brands, and dreamers who refuse to accept the ordinary.
            </p>
            <p className="text-fg">
              Based somewhere between reality and imagination.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-16"
        >
          {[
            { label: "Projects", value: "50+" },
            { label: "Clients", value: "24" },
            { label: "Awards", value: "12" },
            { label: "Years", value: "6" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-heading font-bold text-fg">
                {stat.value}
              </div>
              <div className="text-fg-dim font-body text-sm mt-1 tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
