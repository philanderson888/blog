import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class ContactIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className="wrapper">

          <h2 className="section-headline">How To Find Me</h2>

          <ul>
            <li>
              <strong>LinkedIn </strong><a href="https://www.linkedin.com/in/phil-anderson-60648a11/">phil-anderson-60648a11</a>
            </li>
            <li>
              <strong>Instagram </strong><a href="https://www.instagram.com/philanderson888">philanderson888</a>
            </li>
            <li>
              <strong>Facebook </strong><a href="https://www.facebook.com/philanderson888">philanderson888</a>
            </li>
            <li>
              <strong>Twitter </strong><a href="https://twitter.com/philanderson888">philanderson888</a>
            </li>
            <li>
              <strong>GitHub </strong><a href="https://github.com/philanderson888">philanderson888</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ContactIndex
