"use client";

import { motion } from "framer-motion";
import KineticText from "@/components/KineticText";

const experiments = [
  {
    title: "Particle Universe",
    desc: "10,000 particles reacting to mouse movement in real-time.",
    status: "Live",
  },
  {
    title: "Shader Playground",
    desc: "GLSL fragment shaders with interactive parameter control.",
    status: "Live",
  },
  {
    title: "Void Walker",
    desc: "A first-person WebGL exploration through procedural space.",
    status: "Beta",
  },
  {
    title: "Sound Forms",
    desc: "Audio-reactive 3D geometry that morphs to any input.",
    status: "Coming Soon",
  },
  {
    title: "Gravity Well",
    desc: "Mass-particle simulation with real-time physics.",
    status: "Live",
  },
  {
    title: "Dream Machine",
    desc: "AI-collaged dreamscapes using generative diffusion.",
    status: "Experimental",
  },
];

export default function Experiments() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-accent text-sm font-body tracking-[0.3em] uppercase mb-4">
            Playground
          </p>
          <KineticText
            strength={6}
            className="text-4xl md:text-6xl font-heading font-bold text-fg leading-tight"
          >
            Experiments
          </KineticText>
          <p className="mt-4 text-fg-muted font-body max-w-lg text-lg">
            A living laboratory of ideas — some polished, some in progress.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiments.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
              className="group relative bg-bg-card border border-border rounded-lg p-8 hover:border-accent/40 hover:bg-bg-elevated transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`text-xs font-body tracking-wider uppercase px-2 py-1 rounded ${
                    item.status === "Live"
                      ? "bg-accent/10 text-accent"
                      : item.status === "Beta"
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-fg-dim/10 text-fg-dim"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <KineticText
                strength={3}
                className="text-xl font-heading font-bold text-fg group-hover:text-accent transition-colors"
              >
                {item.title}
              </KineticText>
              <p className="mt-2 text-fg-muted font-body text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
