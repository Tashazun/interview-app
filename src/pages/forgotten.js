import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./forgotten.scss"

const ForgottenPage = () => (
  <Layout>
    <SEO title="Forgotten Credentials" />
    <div className="forgotten-page">
      <h1 className="forgotten-page__title">Forgotten Credentials Page</h1>
      <p className="forgotten-page__greeting">You should really write this stuff down...</p>
      <p className="forgotten-page__credentials">Username: "level"</p>
      <p className="forgotten-page__credentials">Password: "Access123"</p>
      <Link to="/">Go back to the login</Link>
    </div>
  </Layout>
)

export default ForgottenPage