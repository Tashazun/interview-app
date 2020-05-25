import React from "react"
import { Link } from "gatsby"
import { FaThumbsUp } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./success-page.scss"

const SuccessPage = () => (
  <Layout>
    <SEO title="Successful Login" />
    <div className="success-page">
      <div className="success-page__animation">
        <FaThumbsUp className="success-page__icon" aria-hidden="true"/>
      </div>
      <h1 className="success-page__title">You've Successfully Logged In!</h1>
      <p className="success-page__greeting">Welcome to your account page.</p>
      <Link to="/">Go back to the login</Link>
    </div>
  </Layout>
)

export default SuccessPage
