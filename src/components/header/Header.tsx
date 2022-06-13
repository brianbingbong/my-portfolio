import React from "react"
import { Link } from "gatsby"
import * as styles from "./Header.module.scss"
import NavBarLink from "../navBarLink/NavBarLink"

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
          <NavBarLink name="blog" link="/blog" />
        </ul>
      </nav>
    </div>
  )
}

export default Header
