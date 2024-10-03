import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>
          Do you relate to my story, or want to know more about my background?
          
        </p><br/>
        <p>I'd love to connect with you on LinkedIn.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:joy.permpipat@gmail.com">joy.permpipat@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="Email icon" />
          <a href="https://www.linkedin.com/in/joypermpipat" target="_blank">
            linkedin.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Email icon" />
          <a href="https://github.com/Joyperm" target="_blank">
            github.com
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
