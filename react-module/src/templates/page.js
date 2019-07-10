import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
var counter = 0;

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  // data.forEach(function (item, index) {
  //   console.log(item, index);
  // });
  

  return (
    <Layout page={{ ...frontmatter }}>
      <section>
        <div>
          <p>Author: {frontmatter.author}</p>
          <p>Date: {frontmatter.date}</p>
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
        keywords
        author
        date
      }
    }
  }
`
