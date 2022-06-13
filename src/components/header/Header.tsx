import React from "react"
import { Link } from "gatsby"
import * as styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/" aria-label="home">
        <div className={styles.logo}>km.</div>
      </Link>
    </div>
  )
}

export default Header
