import React from "react"
import useForm from "./useForm";
import validate from './validation';

const Form = () => {
  const { values, handleChange, handleSubmit } = useForm(login, validate);

  function login() {
    console.log(values);
  }
 
  return (
    <div className="form">
      <h2 className="form__title">Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          onChange={handleChange}
          value={values.username || ""}
          required />
        <label htmlFor="password">Password</label>
        <input
          id="password"
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