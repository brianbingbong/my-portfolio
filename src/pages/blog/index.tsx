import * as React from "react"
import Layout from "../../components/layout/Layout"
import { Link, graphql } from "gatsby"

interface Props {
  data: any
}

const BlogPage: React.FC<Props> = ({ data }) => {
  console.log(data.allMdx.nodes)
  return (
    <Layout>
      <h1>My Blog Posts</h1>
      <ul>
        {data.allMdx.nodes.map((node: any) => (
          <Link to={`/blog/${node.slug}`}>
            <article key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
          </Link>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage
