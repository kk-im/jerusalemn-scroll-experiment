import { useState, useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "SHOT 1",
    src: "1.png",
  },
  {
    title: "SHOT 2",
    src: "2.png",
  },
  {
    title: "SHOT 3",
    src: "3.png",
  },
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      start: "top-=100px",
      end: document.body.offsetHeight - window.innerHeight - 50,
    });
  }, []);

  return (
    <div ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={`/images/${projects[selectedProject].src}`}
            fill={true}
            alt="project image"
            priority={true}
          />
        </div>
        <div className={styles.column}>
          <p>
            Jerusalem, with ancient stones so bright, Where histories and faiths
            unite in might. The Western Wall, the Dome's golden array, Echoes of
            prayers that never decay.
          </p>
        </div>
        <div className={styles.column}>
          <p>
            Within its walls, cultures intertwine, A city sacred, where stars
            align. The Muezzin's call, the church bells' chime, Resonate tales
            as old as time. Jews, Christians, and Muslims tread, A city of
            peace, where tears are shed. Hope remains, like the olive trees
            stand, In this holy, cherished land.
          </p>
        </div>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => {
                setSelectedProject(index);
              }}
              className={styles.projectEl}
            >
              <h2>{project.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
