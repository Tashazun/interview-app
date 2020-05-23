import React from "react"
import useForm from "./useForm";
import validate from './validation';

import "./login.scss";

const Form = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(login, validate);

  function login() {
    console.log(values);
  }
 
  return (
      <form className="login" onSubmit={handleSubmit}>
        <label htmlFor="username" className="login__label">Username</label>
        <input
          id="username"
          className={`login__username ${errors.username && 'login__username--invalid'}`}
          type="text"
          name="username"
          onChange={handleChange}
          value={values.username || ""}
          required
        />
        {errors.username && (
          <p className="login__error-message">{errors.username}</p>
        )}
        <label htmlFor="password" className="login__label">Password</label>
        <input
          id="password"
          className={`login__password ${errors.password && 'login__password--invalid'}`}
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password || ""}
          required
        />
        {errors.password && (
          <p className="login__error-message">{errors.password}</p>
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