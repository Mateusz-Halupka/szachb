import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
//import * as styles from "../components/index.module.css"


const IndexPage = () => (
  <Layout>
    <h1>Biuro projektowe Szachbud</h1>
    <hr></hr>
    <p>Jesteśmy biurem projektowym działającym w zakresie projektów budowlanych budynków mieszkalnych jednorodzinnych oraz wielorodzinnych oraz projektów technicznych konstrukcji w zakresie wszelkich obiektów budowlanych, za wyjątkiem obiektów komunikacyjnych.
Mamy uprawnienia budowlane w zakresie projektowania w specjalności :</p>
<ul>
  <li>konstrukcyjno - budowlanej bez ograniczeń</li>
  <li>rzeczoznawcy budowlanego w zakresie projektowania budynków niskich oraz średnio wysokich</li>
  <li>architektonicznej bez ograniczeń</li>
</ul>
<p>oraz uprawnienia wykonawcze do kierowania budową w specjalności konstrukcyjno - budowlanej.</p>
<p>Działamy nieprzerwanie od trzydziestu lat ( począwszy od 1992 r. ), generalnie na terenie województwa dolnośląskiego, ze szczególnym uwzględnieniem powiatów :</p>
<ul>
  <li>Wrocław</li>
  <li>trzebnicki</li>
  <li>górowski</li>
  <li>wrocławski</li>
  <li>oławski</li>
  <li>oleśnicki</li>
  <li>wołowski</li>
  <li>głogowski</li>
  <li>polkowicki</li>
</ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
