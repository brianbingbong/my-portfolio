import React from "react"
import { Link } from "gatsby"
import * as styles from "./Header.module.scss"
import NavBarLink from "../navBarLink/NavBarLink"

const headerLinks = ["blog", "projects", "resume"]

const Header = () => {
  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link to="/" aria-label="home">
              <div className={styles.logo}>bo.</div>
            </Link>
          </li>
          {headerLinks.map((link: string) => (
            <li>
              <NavBarLink name={link} link={`/${link}`} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
