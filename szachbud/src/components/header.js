import * as React from "react"
import { Link } from "gatsby"
import "../style/menu.scss"

const Header = ({ siteTitle }) => {
  return (
  <header
    style={{
      backgroundColor: 'black',
      marginBottom: `1.45em`,
      //marginTop: '1.45em',
      //alignItems: 'center',
    }}
  >
<div class='menu'>
<ul style={{ 
          display: "flex",
          //flex: 1,
          paddingTop: '1.45em',
          paddingBottom: '1.45em',
          width: '66rem',
          margin: '0 auto'
      }}>
<li id="start">
  <Link style={{
        color: `#DADADA`,
        textDecoration: `none`,}} to="/">HOME</Link>
</li>
<li id="projects">
<Link style={{
        color: `#DADADA`,
        textDecoration: `none`,}} to="/projects">PROJEKTY</Link>
</li>
<li id="team">
<Link style={{
        color: `#DADADA`,
        textDecoration: `none`,}} to="/team">ZESPÓŁ PROJEKTOWY</Link>
</li>
<li id="contact">
<Link style={{
        color: `#DADADA`,
        textDecoration: `none`,}} to="/contact">KONTAKT</Link>
</li>
</ul>
</div>
  </header>
  )
}

export default Header
