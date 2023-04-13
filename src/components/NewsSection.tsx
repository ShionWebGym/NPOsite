import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const LatestPost = () => {
  const data = useStaticQuery(graphql`
    query LatestPost {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }, limit: 1) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              title
              date(formatString: "YYYY/MM/DD", locale: "ja-JP")
              slug
            }
          }
        }
      }
    }
  `)

  const post = data.allMarkdownRemark.edges[0].node

  return (
    <div>
      <h2>Latest Post</h2>
      <h3>{post.frontmatter.title}</h3>
      <p>{post.excerpt}</p>
      <Link to={`/posts${post.frontmatter.slug}`}>Read more</Link>
    </div>
  )
}

// const NewsSection = () => {
//   return (
//     <div>
//       <LatestPost />
//       {/* Add other news items here */}
//     </div>
//   )
// }

export default LatestPost;
