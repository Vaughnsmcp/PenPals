import React, { useState } from "react";
import Button from "./Button";
import { Link, useHistory } from "react-router-dom";

function LoginForm() {
  const [formObject, setFormObject] = useState({});

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
    console.log(formObject);
  };

  const history = useHistory();

  function validateForm() {
    return formObject.value > 0;
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    history.push("/portfolio");
  }
  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          value={formObject.username || ""}
          name="username"
          type="text"
          placeholder="username"
          onChange={onChange}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          value={formObject.password || ""}
          name="password"
          type="password"
          placeholder="password"
          onChange={onChange}
        ></input>
      </div>
      <Button
        className="btn btn-primary"
        disabled={!validateForm()}
        onClick={handleFormSubmit}
        type="submit"
      >
        Login
      </Button>
      <div className="nav-item">
        <Link
          to="/signup"
          className={
            window.location.pathname === `/signup`
              ? `nav-link active`
              : `nav-link`
          }
        >
          Are you new here? Click here to create an account!
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
