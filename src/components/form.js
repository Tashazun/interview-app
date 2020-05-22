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
    <div className="login">
      <h2 className="login__title">Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          className={`login__username ${errors.username && 'login__username--invalid'}`}
          type="text"
          name="username"
          onChange={handleChange}
          value={values.username || ""}
          required />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className={`login__password ${errors.password && 'login__password--invalid'}`}
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password || ""}
          required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form