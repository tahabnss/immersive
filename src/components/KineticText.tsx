"use client";

import { useRef, useCallback } from "react";

interface KineticTextProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function KineticText({
  children,
  className = "",
  strength = 10,
}: KineticTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      el.style.transform = `perspective(600px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) translateZ(${Math.abs(x * y) * 20}px)`;
    },
    [strength],
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
  }, []);

  return (
    <span
      ref={ref}
      className={`inline-block transition-transform duration-200 ease-out will-change-transform ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </span>
  );
}
