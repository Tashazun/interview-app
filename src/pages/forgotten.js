import React, { useState } from "react"
import GifPlayer from "react-gif-player";
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import catImage from "../images/cat.jpg"
import catGif from "../images/cat.gif"
import excitedGif from "../images/excited.gif"
import excitedImage from "../images/excited.jpg"

import "./forgotten.scss"

const ForgottenPage = () => {

  const [selection, setSelection] = useState('');

  const handleChange = event => {
    event.persist();
    setSelection(event.target.value);
  }

  return (
    <Layout>
      <SEO title="Forgotten Credentials" />
      <div className="forgotten-page">
        <div className="forgotten-page__radio-group">
          <h1 className="forgotten-page__title">Security Question: Are you thinking of hiring me?</h1>
          <div className="forgotten-page__container">
            <label htmlFor="yes">Yes</label>
            <input
              id="yes"
              className="forgotten-page__input"
              type="radio"
              name="security"
              value="yes"
              onChange={handleChange}/>
            <label htmlFor="no">No</label>
            <input
              id="no"
              className="forgotten-page__input"
              type="radio"
              name="security"
              value="no"
              onChange={handleChange}
            />
          </div>
        </div>
        {selection === "yes" && (
          <div className="forgotten-page__gif-container">
            <GifPlayer gif={excitedGif} still={excitedImage} alt="Meme of Actor Jonah Hill waving and shouting excitedly."/>
            <a
              href="https://giphy.com/gifs/excited-screaming-jonah-hill-5GoVLqeAOo6PK"
            >(Keyboard users can view above gif here)</a>
            <div className="forgotten-page__credentials">
              <p>Username: "level"</p>
              <p>Password: "Access123</p>
            </div>
          </div>
        )}
        {selection === "no" && (
          <div className="forgotten-page__gif-container">
            <GifPlayer gif={catGif} still={catImage} alt="Sad cat sheds a single tear"/>
            <a href="https://giphy.com/gifs/71PLYtZUiPRg4">(Keyboard users can view above gif here)</a>
          </div>
        )}
        <Link to="/">Return to Login page</Link>
      </div>
    </Layout>
  )
}

export default ForgottenPage