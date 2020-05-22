import React from "react"
import useForm from "./useForm";
import validate from './validation';

import "./form.scss";

const Form = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(login, validate);

  function login() {
    console.log(values);
  }
 
  return (
      <form className="login" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          className={`login__username ${errors.username && 'login__username--invalid'}`}
          type="text"
          name="username"
          onChange={handleChange}
          value={values.username || ""}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className={`login__password ${errors.password && 'login__password--invalid'}`}
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password || ""}
          required
        />
        <button
          className="login__button"
          type="submit"
          name="submit"
          >Submit</button>
      </form>
  )
}

export default Form