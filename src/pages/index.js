import React from "react"

import Layout from "../components/layout"
import Login from "../components/login"
import SEO from "../components/seo"

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Login Page" />
    <section className="form">
      <h2 className="form__heading">Log Into Your Account</h2>
      <Login />
      <p className="form__forgotten-password">Forgot Password?</p>
    </section>
  </Layout>
)

export default IndexPage
