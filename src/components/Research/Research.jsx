import React from "react";
import Researchs from "../../data/research.json";

import { getImageUrl } from "../../utils";
import styles from "./Research.module.css";

const Research = () => {
  return (
    <section className={styles.container} id="research">
      <h2 className={styles.title}>Research</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("research/research.png")}
          alt="Research Paper"
          className={styles.aboutImage}
        />

        {Researchs.map((research, id) => {
          return (
            <ul key={id} className={styles.aboutItems}>
              <li className={styles.aboutItem}>
                <h3>{research.title}</h3>
              </li>
              <li className={styles.aboutItem}>
                <p>{research.description}</p>
              </li>
              <div className={styles.links}>
                <a href={research.source} target="_blank" className={styles.link}>
                  Source
                </a>
              </div>
            </ul>
          );
        })}
      </div>
    </section>
  );
};

export default Research;
