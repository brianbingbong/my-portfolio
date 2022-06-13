import React from "react";
import * as styles from "./footer.module.scss";

const Footer = () => (
  <div className={styles.footer}>
    <a
      href="https://github.com/konstantinmuenster/how-to-gatsby-portfolio"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label="External Link"
    >
      <span role="img" aria-label="emoji">👏</span> Visit on GitHub
    </a>
  </div>
)

export default Footer