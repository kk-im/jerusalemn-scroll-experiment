"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function Intro() {
  const background = useRef(null);
  const homeHeader = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,

        scrub: true,

        start: "top",

        end: "+=500px",
      },
    });

    timeline

      .from(background.current, { clipPath: `inset(15%)` })

      .to(introImage.current, { height: "200px" }, 0);
  }, []);

  return (
    <div ref={homeHeader} classname={styles.homeHeader}>
      <div className={styles.backgroundImage} ref={background}>
        <Image src="/images/hero-bg.png" fill={true} priority={true} />
      </div>

      <div
        className={styles.intro}
        ref={introImage}
        data-scroll
        data-scroll-speed="0.3"
      >
        <div className={styles.introImage}>
          <Image
            src={"/images/hero-portrait.png"}
            fill={true}
            priority={true}
          />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">
          JERUSALEM
        </h1>
      </div>
    </div>
  );
}
