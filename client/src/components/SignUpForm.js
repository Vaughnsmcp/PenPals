import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import API from "../utils/API";
import Button from "./Button";

function SignUpForm(props) {
  const [formObject, setFormObject] = useState({});
  const onChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const history = useHistory();

  function handleFormSubmit() {
    if (formObject.username && formObject.email && formObject.password) {
      API.createSignUp({
        username: formObject.username,
        email: formObject.email,
        password: formObject.password,
      })
        .then(({ data }) => {
          console.log(`Successfully signed up!`, data._id);
          props.setUserId(data._id);
          history.push("/portfolio");
        })
        .catch((err) => console.error(err));
    }
  }

  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          value={formObject.username || ""}
          name="username"
          onChange={onChange}
          type="text"
          placeholder="username"
        ></input>
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          value={formObject.email || ""}
          name="email"
          onChange={onChange}
          type="text"
          placeholder="email"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          value={formObject.password || ""}
          name="password"
          onChange={onChange}
          type="password"
          placeholder="password"
        ></input>
      </div>
      <Button
        className="btn btn-primary"
        disabled={
          !(formObject.username && formObject.email && formObject.password)
        }
        onClick={handleFormSubmit}
      >
        Sign Up
      </Button>
      <div className="nav-item">
        <Link
          to="/login"
          className={
            window.location.pathname === `/login`
              ? `nav-link active`
              : `nav-link`
          }
        >
          Do you already have an account? Click here to login!
        </Link>
      </div>
    </div>
  );
}

export default SignUpForm;
