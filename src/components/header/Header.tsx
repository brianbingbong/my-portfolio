import React from "react"
import { Link } from "gatsby"
import * as styles from "./Header.module.scss"

const Header = () => {
  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link to="/" aria-label="home">
              <div className={styles.logo}>km.</div>
            </Link>
          </li>
          <li>
            <Link to="/blog" aria-label="blog">
              <div className={styles.headerLink}>blog</div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
