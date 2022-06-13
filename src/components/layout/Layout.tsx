import React from "react"

import * as styles from "./layout.module.scss"
import Header from "../header/Header"
import Footer from "../footer/Footer"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main id={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
