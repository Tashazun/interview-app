import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Login from "../components/login"
import SEO from "../components/seo"

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Login Page" />
    <section className="form">
      <h1 className="form__heading">Log Into Your Account</h1>
      <Login />
      <Link to="/forgotten" >Forgot Password/Username?</Link>
    </section>
  </Layout>
)

export default IndexPage
