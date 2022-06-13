import React from "react"
import * as styles from "./Hero.module.scss"

interface Props {
  content: any
}

const Hero = ({ content }: Props ) => {
  const { frontmatter, rawMarkdownBody } = content

  return (
    <div id="hero">
      <h1 className={styles.title}>
        {frontmatter.greetings}{" "}
        <span role="img" aria-label="emoji">
          {frontmatter.emoji}
        </span>
        <br />
        {frontmatter.title}
      </h1>
      <h2 className={styles.subtitle}>
        {frontmatter.subtitlePrefix}{" "}
        <span className={styles.highlighted}>{frontmatter.subtitleHighlight}</span>
      </h2>
      <div className="description">{rawMarkdownBody}</div>
    </div>
  )
}

export default Hero