import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/me3.png")}
          alt="Me standing"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                I'm a full stack developer with experience in building
                responsive sites and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
                I have experience in ETL processes to clean, transform, and load
                large datasets into Power BI, ensuring data accuracy and
                integrity for decision-making.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/ui.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>My goal</h3>
              <p>
                Is to create platforms for collecting data and transforming it into visually compelling
                representations, making complex information easily accessible
                and understandable for business purposes.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
