import React from "react"
import Hero from "../components/hero/Hero"
import Layout from "../components/layout/Layout"
import { graphql } from "gatsby"


type Props = {
  data: any
}

const IndexPage = ( { data }: Props ) => {
  return (
    <Layout>
      <Hero content={data.hero.edges[0].node}/>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
          }
          rawMarkdownBody
        }
      }
    }
  }
`

export default IndexPage