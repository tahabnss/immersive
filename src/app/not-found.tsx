"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <p className="text-accent text-sm font-body tracking-[0.3em] uppercase mb-4">
          Error 404
        </p>

        <h1 className="text-8xl md:text-9xl font-heading font-bold text-fg leading-none tracking-tight">
          Lost in
          <br />
          <span className="text-accent">Space</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 text-lg text-fg-muted font-body max-w-md mx-auto leading-relaxed"
        >
          This dimension doesn&apos;t exist. Or maybe it does, but we haven&apos;t rendered it yet.
          Either way, let&apos;s get you back.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10"
        >
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-accent text-bg font-heading font-semibold text-sm tracking-wider uppercase hover:bg-accent-dark transition-colors"
          >
            Return Home
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-fg-dim font-mono text-xs"
        >
          $ whereami — command not found
        </motion.p>
      </motion.div>
    </div>
  );
}
