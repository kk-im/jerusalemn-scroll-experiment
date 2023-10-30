"use client";

import { useEffect } from "react";
import Intro from "@/components/Intro";
import Description from "@/components/Description";
import Projects from "@/components/Projects";

export default function Home() {
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
  }, []);

  return (
    <main>
      <Intro />
      <Description />
      <Projects />
    </main>
  );
}
