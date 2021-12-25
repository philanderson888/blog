import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import ArticlePreview from '../components/article-preview'

class ContactIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className={styles.hero}>
          Contact Details
        </div>
        <div className="wrapper">
          <h2 className="section-headline">How To Find Me</h2>
          <ul>
            <li>
              <em>Instagram</em><a href="https://www.instagram.com/philanderson888">philanderson888</a>
            </li>
            <li>
              <em>LinkedIn</em><a href="https://www.linkedin.com/in/phil-anderson-60648a11/">phil-anderson-60648a11</a>
            </li>
            <li>
              <em>GitHub</em><a href="https://github.com/philanderson888">philanderson888</a>
              <ul>
                <em>Flutter</em><a href="https://github.com/philanderson888/flutter">philanderson888/flutter</a>
                <em>Java</em><a href="https://github.com/philanderson888/java-playground">philanderson888/java-playground</a>
                <em>NodeJs</em><a href="https://github.com/philanderson888/nodejs">philanderson888/nodejs</a>
                <em>Javascript</em><a href="https://github.com/philanderson888/javascript">philanderson888/javascript</a>
                <em>Vue</em><a href="https://github.com/philanderson888/vue">philanderson888/vue</a>
                <em>A+/Net+/Security+ Teaching Notes</em><a href="https://github.com/philanderson888/course-notes/tree/master/infrastructure">philanderson888/course-notes/infrastructure</a>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles.hero}>
          A Little About Me
        </div>
        <p>I am happily married, have been for many years now and live in North London with my wife and family.  My interests include playing the piano and guitar and working out regularly, also I am a passionate born-again Christian and help with charities such as helping people in <a href="https://www.gofundme.com/manage/christian-missionary-orphanage-in-pakistan">persecuted nations</a> and here at home in the UK also with volunteering with organisations such as <a href="https://northenfield.foodbank.org.uk">Enfield Food Bank</a> and <a href="https://jubileechurchlondon.org">Jubilee Church London</a></p>
      </div>
    )
  }
}

export default ContactIndex

export const pageQuery = graphql`
  query ContactIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
