import React from "react"
import { Link, graphql } from "gatsby"

import Comment from "../components/comment"
import Layout from "../components/layout"

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => (
  <Layout
    page={{
      title: "Index",
      description: "Index page",
      keywords: "gatsby, website, blog"
    }}
  >
    <div>
      <section>
        <div style={{textAlign:"center"}}>
          <h2>Welcome to my Gatsby Blog</h2>
          <p>This is a dynamic website generated with Gatsby.</p>
          
          <h2>Site Links:</h2>
          <ul>
          {
            edges.map(edge => 
              <li key={edge.node.frontmatter.title}>
                <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
              </li>)
          }
          </ul>
          <br/>
          <Comment></Comment>
        </div>
      </section>
      
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
