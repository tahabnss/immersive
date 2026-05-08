"use client";

import { motion } from "framer-motion";
import KineticText from "@/components/KineticText";

const projects = [
  {
    title: "Nebula",
    type: "Spatial Installation",
    desc: "An immersive 3D environment that responds to user presence and movement.",
    year: "2026",
  },
  {
    title: "Void",
    type: "Interactive Experience",
    desc: "A deep-space exploration through particle systems and procedural generation.",
    year: "2025",
  },
  {
    title: "Prism",
    type: "Brand Identity",
    desc: "A visual identity system built on light refraction and geometric distortion.",
    year: "2025",
  },
  {
    title: "Echo",
    type: "WebGL Experience",
    desc: "Real-time audio-reactive visuals using WebGL shader pipelines.",
    year: "2024",
  },
  {
    title: "Flux",
    type: "Creative Tool",
    desc: "A browser-based tool for generative art and real-time collaboration.",
    year: "2024",
  },
];

export default function Work() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-accent text-sm font-body tracking-[0.3em] uppercase mb-4">
            Selected Projects
          </p>
          <KineticText
            strength={6}
            className="text-4xl md:text-6xl font-heading font-bold text-fg leading-tight"
          >
            Work
          </KineticText>
          <p className="mt-4 text-fg-muted font-body max-w-lg text-lg">
            Each project pushes the boundary of what&apos;s possible in the browser.
          </p>
        </motion.div>

        <div className="mt-16 space-y-1">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className="group relative border-t border-border last:border-b py-8 px-4 -mx-4 hover:bg-bg-card/50 transition-colors cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <KineticText
                    strength={4}
                    className="text-2xl md:text-3xl font-heading font-bold text-fg group-hover:text-accent transition-colors"
                  >
                    {project.title}
                  </KineticText>
                  <p className="text-fg-muted font-body text-sm mt-1">
                    {project.type}
                  </p>
                </div>
                <div className="flex-1 hidden md:block">
                  <p className="text-fg-dim font-body">{project.desc}</p>
                </div>
                <div className="text-fg-dim font-body text-sm font-mono">
                  {project.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
