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

          <h2 className="section-headline">Charity Work</h2>

          <p>As a Christian I have a strong interest in helping others in various different ways such as - </p>

          <ul>
            <li>
              <a href="https://northenfield.foodbank.org.uk">Enfield Foodbank</a>
              <p>Enfield foodbank is a lifeline to various people in the community who need a helping hand with provisions etc on a very practical level.  It's a joy to get involved with such a blessed organisation which puts the gospel into practice in a very caring and loving way, without being judgemental in any way - they are genuinely there to serve the needs of others.</p>
            </li>
            <li>
              <a href="https://jubileechurchlondon.org">Jubilee Church London</a>
              <p>As a member of this church I serve in various capacities and also help out in the tech department</p>
            </li>
            <li>
              GoFundMe Campaigns
              <ul>
                <li>
                  <a href="https://www.gofundme.com/manage/saba-ajmal-care-ministry-of-pakistan">2020</a>
                </li>
                <li>
                  <a href="https://www.gofundme.com/manage/christian-missionary-orphanage-in-pakistan">2021</a>
                </li>
              </ul>
            </li>
            <li>
              <p>Christian Merchandise Shop which my daughter Hannah is building!  <a href="https://jesusislord.uk">JesusIsLord.uk</a></p>
            </li>
            <li>
              <p>Piano And Worship</p>
              <p>As a self-taught pianist I have an interest in expressing my love for the Lord in song and in worship.  I actually can play the piano 'by ear' ie can pick up melodies, chords and song structure just by listening to the song at hand, whether be on the radio or live in person at an event.  I'm not a super expert pianist but I can hold my own at about Grade 2/3/4 level no problem and can help in a worship band play songs to a congregation.  I can also sing a little bit and can even, on occasion, lead worship.  From time to time myself and my wife do online worship sessions direct from our home and we often use a platform called '<a href="https://www.facebook.com/burn247global">Burn 24/7</a>' to do this which is a movement to bring Christians together from around the world in an atmosphere of prayer and worship. 
              </p>
              <p>I also play around with very experimental 'hobbyist' recording such as on this <a href="https://www.youtube.com/playlist?list=PLj4RRqmdO6GJKZJjUro7wxgzAfIqhv-k6">channel </a> on YouTube which has a few songs that I wrote, performed and recorded with very basic home equipment.
              </p>
            </li>
            
          </ul>


          <h2 className="section-headline">Websites</h2>

          <p>Recently I have bought several charity domain websites with the idea of pushing several different ventures.  Most of these are placeholder domains at the moment.</p> 
          <ul>
            <li>
              <p><a href="https://www.effectivemethodsofevangelism.com">EffectiveMethodsOfEvangelism.com</a></p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default AboutIndex
