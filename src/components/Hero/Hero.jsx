import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Afzal Ahmad</h1>
        <p className={styles.description}>
          Motivated and aspiring software developer with a strong foundation in
          programming concepts and a keen interest in Software development.
          Seeking an entry-level position in the IT sector to apply my skills
          and knowledge in developing innovative and visually appealing web
          applications
        </p>
        <a href="mailto:afzalm117@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/afzal1.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
