import React from "react"

import Layout from "../components/layout"
import Form from "../components/form"
import SEO from "../components/seo"

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Login" />
    <section className="form__greeting">
      <h2 className="form__heading">Login Form</h2>
      <Form />
    </section>
  </Layout>
)

export default IndexPage
