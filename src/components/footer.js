import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { GiCandyCanes } from "react-icons/gi"

import "./footer.scss"

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="footer__disclaimer">
    © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org" aria-label="External page for more Gatsby.js info">Gatsby</a>
    </div>
    <div className="footer__links">
      <GiCandyCanes className="footer__logo" aria-hidden="true"/>
      <Link to="/" >{siteTitle} Home</Link>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
