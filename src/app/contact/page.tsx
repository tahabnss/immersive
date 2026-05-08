"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import KineticText from "@/components/KineticText";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-accent text-sm font-body tracking-[0.3em] uppercase mb-4">
            Connect
          </p>
          <KineticText
            strength={8}
            className="text-4xl md:text-7xl font-heading font-bold text-fg leading-[0.95]"
          >
            Let&apos;s create
            <br />
            <span className="text-accent">something</span>
            <br />
            extraordinary.
          </KineticText>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {(["name", "email", "message"] as const).map((field) => (
                <div key={field} className="relative">
                  {field === "message" ? (
                    <textarea
                      id={field}
                      value={formState[field]}
                      onChange={(e) =>
                        setFormState((p) => ({ ...p, [field]: e.target.value }))
                      }
                      onFocus={() => setFocused(field)}
                      onBlur={() => setFocused(null)}
                      rows={4}
                      className="w-full bg-transparent border-b border-border px-0 py-3 text-fg font-body text-lg outline-none transition-colors focus:border-accent resize-none"
                      placeholder=" "
                    />
                  ) : (
                    <input
                      id={field}
                      type={field === "email" ? "email" : "text"}
                      value={formState[field]}
                      onChange={(e) =>
                        setFormState((p) => ({ ...p, [field]: e.target.value }))
                      }
                      onFocus={() => setFocused(field)}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border-b border-border px-0 py-3 text-fg font-body text-lg outline-none transition-colors focus:border-accent"
                      placeholder=" "
                    />
                  )}
                  <label
                    htmlFor={field}
                    className={`absolute left-0 transition-all pointer-events-none ${
                      focused === field || formState[field]
                        ? "-top-5 text-xs text-accent"
                        : "top-3 text-fg-dim text-lg"
                    }`}
                  >
                    {field === "name"
                      ? "Your name"
                      : field === "email"
                        ? "Your email"
                        : "Your message"}
                  </label>
                </div>
              ))}

              <button
                type="submit"
                className="w-full py-4 bg-accent text-bg font-heading font-semibold text-sm tracking-wider uppercase hover:bg-accent-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-8 text-fg-muted font-body"
          >
            <div>
              <h3 className="text-fg font-heading font-semibold text-sm tracking-wider uppercase mb-2">
                Studio
              </h3>
              <p className="leading-relaxed">
                somewhere@studio.space
                <br />
                +1 (555) 000-0000
              </p>
            </div>
            <div>
              <h3 className="text-fg font-heading font-semibold text-sm tracking-wider uppercase mb-2">
                Location
              </h3>
              <p className="leading-relaxed">
                Digital realm, everywhere
                <br />
                Available worldwide
              </p>
            </div>
            <div className="border-t border-border pt-8">
              <p className="text-sm leading-relaxed text-fg-dim">
                We typically respond within 24 hours.
                <br />
                For urgent inquiries, reach out via carrier pigeon.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
