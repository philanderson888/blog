import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class AboutThisSiteIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className="wrapper">
          
          <h2 className="section-headline">About This Site</h2>
          
          <p>This site is built with Gatsby as a static site content generator website.  The blogs are stored in text format at `contentful.com` which stores the back-end content data and image links for the blog posts.  When the site is built, the data is fetched by gatsby and compiled together to produce a very fast static-site-generated website.  Enjoy! </p>
          <br />
          <br />
          &copy; PhilAndersonWebsites 2020

        </div>
      </div>
    )
  }
}

export default AboutThisSiteIndex
