"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
      }
    };

    const onOver = () => {
      if (cursorRef.current) cursorRef.current.classList.add("scale-150", "mix-blend-difference");
    };

    const onOut = () => {
      if (cursorRef.current) cursorRef.current.classList.remove("scale-150", "mix-blend-difference");
    };

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, input, textarea, [role=button]").forEach((el) => {
      el.addEventListener("mouseenter", onOver);
      el.addEventListener("mouseleave", onOut);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.querySelectorAll("a, button, input, textarea, [role=button]").forEach((el) => {
        el.removeEventListener("mouseenter", onOver);
        el.removeEventListener("mouseleave", onOut);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] rounded-full border border-accent transition-all duration-200 ease-out"
      style={{ transform: "translate(0, 0)" }}
    />
  );
}
