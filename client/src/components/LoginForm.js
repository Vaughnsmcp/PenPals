import React, { useState } from "react";
import Button from "./Button";
import { Link } from 'react-router-dom';

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }
    function handleFormSubmit(event) {
        event.preventDefault();
    }
  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        
          
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          value={username}
          type="username"
          placeholder="username"
          onChange={event => setUsername(event.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          value={password}
          type="password"
          placeholder="password"
          onChange={event => setPassword(event.target.value)}
        ></input>
      </form>
      <Button disabled={!validateForm()} type="submit"
      >

          Login
      </Button>
      <div className="nav-item">
                <Link
                to="/signup"
                className={
                    window.location.pathname === `/signup` ? `nav-link active` : `nav-link`
                }
                >
                    Are you new here? Click here to create an account!
                </Link>
                </div>
    </div>
  );
}

export default LoginForm;



