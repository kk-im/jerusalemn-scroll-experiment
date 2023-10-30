"use client";

import { useEffect } from "react";
import Intro from "@/components/Intro/Intro";
import Description from "@/components/Description/Description";
import Projects from "@/components/Projects/Projects";

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
