import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
  };

  const focusOnError = () => {
    const el = document.getElementsByClassName("login__error-message");
    if ( el.length) {
      el[0].focus();
    }
  }

  const handleChange = event => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
    focusOnError();
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;