import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class AboutIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className="wrapper">
          
          <h2 className="section-headline">A Little About Me</h2>
          
          <p>I am happily married, have been for many years now and live in North London with my wife and family.  My interests include playing the piano and guitar and working out regularly, also I am a passionate born-again Christian and help with charities such as helping people in <a href="https://www.gofundme.com/manage/christian-missionary-orphanage-in-pakistan">persecuted nations</a> and here at home in the UK also with volunteering with organisations such as <a href="https://northenfield.foodbank.org.uk">Enfield Food Bank</a> and <a href="https://jubileechurchlondon.org">Jubilee Church London</a></p>

          <h2 className="section-headline">Work And Career</h2>

          <p>
            For many years I've been a tech trainer working with <a href="https://www.gov.uk/apply-apprenticeship">apprenticeships</a> but also as a contract trainer working freelance working with clients in the realm of IT Hardware, Software, Networking, Security and even CyberSecurity, delivering high quality training both in the UK and abroad to both civilian and military clients.
          </p>
          <p>
            Recently I have turned my focus to being a programmer, initially focusing on training graduates into developer roles at the fantastic company <a href="https://www.spartaglobal.com">Sparta Global</a> but more recently I have gone to work myself as a software engineer.  I've been working with both <a href="https://reactjs.org">ReactJS</a> and more recently building TV applications with <a href="https://developer.roku.com/en-gb/overview">Roku Brightscript</a> and am currently enjoying working on a major contract for one of the UK's largest streaming TV providers.
          </p>

          <h2 className="section-headline">Tech Skills And Interests</h2>

          <p>
            I have a wide range of interests and skills, varying widely from IT Support, Networking, Security and Cybersecurity through to development in an array of different languages and technologies.  Some of my <a href="https://github.com/philanderson888?tab=repositories">GitHub repositories</a> give a flavour of the diversity of my interests and some of them are listed below.  Currently I'm looking into mobile app development with <a href="https://flutter.dev">Google Flutter</a>
          </p>

          <ul>
            <li>
              <strong>GitHub </strong><a href="https://github.com/philanderson888">philanderson888</a>
              <ul>
                <li>
                  <strong>Flutter </strong><a href="https://github.com/philanderson888/flutter">philanderson888/flutter</a>
                </li>
                <li>
                  <strong>Java </strong><a href="https://github.com/philanderson888/java-playground">philanderson888/java-playground</a>
                </li>
                <li>   
                  <strong>NodeJs </strong><a href="https://github.com/philanderson888/nodejs">philanderson888/nodejs</a>       
                </li>
                <li>
                  <strong>Javascript </strong><a href="https://github.com/philanderson888/javascript">philanderson888/javascript</a>  
                </li>
                <li>
                  <strong>Vue </strong><a href="https://github.com/philanderson888/vue">philanderson888/vue</a>
                </li>
                <li>
                  <strong>A+/Net+/Security+ Teaching Notes </strong><a href="https://github.com/philanderson888/course-notes/tree/master/infrastructure">philanderson888/course-notes/infrastructure</a>
                </li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    )
  }
}

export default AboutIndex
