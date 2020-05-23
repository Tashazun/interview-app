import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./footer.scss"

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div>
    © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
    <Link to="/" >{siteTitle}</Link>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
