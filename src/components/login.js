import React from "react"
import { navigate } from "gatsby";
import { MdError } from "react-icons/md";

import useForm from "./useForm";
import validate from './validation';

import "./login.scss";

const Form = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(login, validate);

  function login() {
    console.log('No errors, submit callback called!');
    navigate("/success-page");
  }
 
  return (
      <form
        role="form"
        className="login"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username" className="login__label">Username</label>
        <input
          id="username"
          className={`login__input ${errors.username && 'login__input--invalid'}`}
          type="text"
          name="username"
          onChange={handleChange}
          value={values.username || ""}
          aria-describedby={`${errors.username ? "error__1" : ""}`}
          aria-required="true"
        />
        {errors.username && (
          <span
            id="error__1"
            className="login__error-message"
            tabIndex="-1"
          >
            <MdError aria-hidden="true"/>
            {errors.username}
          </span>
        )}
        <label htmlFor="password" className="login__label">Password</label>
        <input
          id="password"
          className={`login__input ${errors.password && 'login__input--invalid'}`}
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password || ""}
          aria-describedby={`${errors.password ? "error__2" : ""}`}
          aria-required="true"
        />
        {errors.password && (
          <span
            id="error__2"
            className="login__error-message"
            tabIndex="-1"
          >
            <MdError aria-hidden="true"/>
            {errors.password}
          </span>
        )}
        <button
          className="login__button"
          type="submit"
          name="submit"
          >Submit</button>
      </form>
  )
}

export default Form