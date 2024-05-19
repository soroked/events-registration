import { useState } from "react";
import css from "./Form.module.css";
import { Link, useParams } from "react-router-dom";
import MaskedInput from "react-text-mask";

const Form = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
  });
  const { id } = useParams();

  const handleInputChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.fullName && values.email && values.dateOfBirth) {
      setValid(true);
    }
    try {
      await fetch(
        `https://backend-events-registration.onrender.com/api/events/registration/${id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.fullName,
            email: values.email,
            dateOfBirth: values.dateOfBirth,
          }),
        }
      );
      setSubmitted(true);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className={css.formContainer}>
      <form className={css.registerForm} onSubmit={handleSubmit}>
        {submitted && valid && !error && (
          <>
            <div className={css.successMessage}>
              <h3> Welcome {values.fullName} </h3>
              <div> Your registration was successful! </div>
            </div>
            <Link to="/" className={css.backToHomeBtn}>
              Back to events page
            </Link>
          </>
        )}

        {error && (
          <>
            <div className={css.errorMessage}>
              <h3> Oops, something went wrong... </h3>
              <Link to="/" className={css.backToHomeBtn}>
                Please go back to events page and try again
              </Link>
            </div>
          </>
        )}

        {!valid && (
          <input
            className={css.formField}
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.fullName && (
          <span id="full-name-error">Please enter a full name</span>
        )}

        {!valid && (
          <input
            className={css.formField}
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}

        {!valid && (
          <MaskedInput
            mask={[/\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/]}
            className={css.formField}
            type="text"
            placeholder="Date of birth"
            name="dateOfBirth"
            value={values.dateOfBirth}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.dateOfBirth && (
          <span id="date-of-birth-error">Please enter a date of birth</span>
        )}

        {!valid && (
          <div className={css.ad}>
            <p className={css.adTitle}>Where did you hear about this event?</p>
            <input type="radio" id="media" name="ad" value="1"></input>
            <label htmlFor="media">Social media</label>
            <input type="radio" id="friends" name="ad" value="2"></input>
            <label htmlFor="friends">Friends</label>
            <input type="radio" id="myself" name="ad" value="3"></input>
            <label htmlFor="myself">Found myself</label>
          </div>
        )}

        {!valid && (
          <button className={css.formField} type="submit">
            Register
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
