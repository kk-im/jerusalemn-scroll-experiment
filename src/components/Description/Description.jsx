import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const phrases = [
  "Jerusalem city in Israel",
  "is one of the holiest places on earth",
  "bringing together multiple denominations",
  "at the Western wall",
  "where people pray",
];

export default function Description() {
  return (
    <div className={styles.description}>
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}

function AnimatedText({ children }) {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,

        scrub: true,

        start: "0px bottom",

        end: "bottom+=400px bottom",
      },

      opacity: 0,

      left: "-200px",

      ease: "power3.Out",
    });
  }, []);

  return <p ref={text}>{children}</p>;
}
