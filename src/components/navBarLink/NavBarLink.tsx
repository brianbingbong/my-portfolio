import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./NavBarLink.module.scss"

interface Props {
  name: string
  link: string
}

const NavBarLink: React.FC<Props> = ( { name, link } ) => {
  return (
    <li>
      <Link to={link} aria-label={name}>
        <div className={styles.headerLink}>{name}</div>
      </Link>
    </li>
  )
}

export default NavBarLink
