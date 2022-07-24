import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

export default () => ( 
 <nav role = "navigation" >
  <ul className = {
    styles.navigation
  }>
  <li className = {
    styles.navigationItem
  }>
  <Link to = "/" > Home (PhilAnderson.uk) < /Link> 
  </li> 
  <li className = {
    styles.navigationItem
  }><Link to = "/about/" > About Me < /Link> </li> 
  <li className = {
    styles.navigationItem
  }><Link to = "/about-this-site/" > About This Site < /Link> </li> 
  <li className = {
    styles.navigationItem
  }><Link to = "/blog/" > Blog < /Link> </li> 
  <li className = {styles.navigationItem}><a href="https://epic-hamilton-f35937.netlify.com/">Learning</a></li>
  <li className = {styles.navigationItem}><a href="https://epic-hamilton-f35937.netlify.com/">VueJS with Bulma CSS</a></li>
  <li className = {
    styles.navigationItem
  }><Link to = "/contact/" > Contact < /Link> </li> 
  </ul> 
  </nav>
)