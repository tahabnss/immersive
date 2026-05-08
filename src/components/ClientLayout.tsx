"use client";

import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import NoiseOverlay from "@/components/NoiseOverlay";
import Scanlines from "@/components/Scanlines";
import CursorTrail from "@/components/CursorTrail";
import ScrollProgress from "@/components/ScrollProgress";

const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), {
  ssr: false,
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <CursorTrail />
      <NoiseOverlay />
      <Scanlines />
      <ThreeBackground />
      <ScrollProgress />
      <Nav />
      <PageTransition>{children}</PageTransition>
    </>
  );
}
