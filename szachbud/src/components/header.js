import * as React from "react"
import { Link } from "gatsby"
import "../style/menu.scss"

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundColor: '#00000',
      marginBottom: `1.45em`,
      marginTop: '1.45em',
      alignItems: 'center',
    }}
  >
<div class='menu'>
<ul style={{ 
          display: "flex",
          flex: 1,
          paddingTop: '20px',
          paddingBottom: '20px',
          backgroundColor: '#00000',
      }}>
<li id="start">
  <Link style={{
        color: `#DADADA`,
        textDecoration: `none`,}} to="/">HOME</Link>
</li>
<li id="projects">
  PROJEKTY
</li>
<li id="team">
  ZESPÓŁ PROJEKTOWY
</li>
<li id="contact">
  KONTAKT
</li>
</ul>
</div>
  </header>
)

export default Header
