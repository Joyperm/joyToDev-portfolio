import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Joy</h1>
        <p className={styles.description}>
          Computing Studies and Information Systems student with
          hands-on experience in building MERN-Stack websites with CRUD features
          and Android applications with APIs. Backed by 2 years of experience in
          data analysis and database management, and a bachelor's degree in
          economics
        </p>
        <a href="mailto:joy.permpipat@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/me.png")}
        alt="profile image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
