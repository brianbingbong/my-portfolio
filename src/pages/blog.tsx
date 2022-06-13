import * as React from "react"
import Layout from "../components/layout/Layout"
import { graphql } from "gatsby"

interface Props {
  data: any
}

const BlogPage: React.FC<Props> = ( { data } ) => {
  console.log(data.allFile.nodes)
  return (
  <Layout>
    <h1>My Blog Posts</h1>
    <ul>
      {
        data.allFile.nodes.map((node: any) =>
          <li key={node.name}>
            {node.name}
          </li>
        )
      }
    </ul>
  </Layout>
  )
}

export const query = graphql`
query {
  allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
    nodes {
      name
    }
  }
}
`

export default BlogPage
