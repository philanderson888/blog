import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

export default () => ( 
 <nav role = "navigation" >
  <ul className = {
    styles.navigation
  }>
  <
  li className = {
    styles.navigationItem
  } >
  <
  Link to = "/" > Home < /Link> <
  /li> <
  li className = {
    styles.navigationItem
  } >
  <
  Link to = "/blog/" > Blog < /Link> <
  /li> <
  li > className = {
    styles.navigationItem
  } >
  <
  Link to = "https://epic-hamilton-f35937.netlify.com/" > VueJS Teaching Website < /Link> <
  /li> <
  /ul> <
  /nav>
)