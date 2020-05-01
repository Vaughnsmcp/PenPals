import React from "react";
import Button from "./Button";
import { Link } from 'react-router-dom';


function Form(props) {
  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          value={props.username}
          type="text"
          placeholder="username"
        ></input>
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          value={props.email}
          type="text"
          placeholder="email"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          value={props.password}
          type="text"
          placeholder="password"
        ></input>
      </div>
      <Button>
        Sign Up
        </Button>
        <div className="nav-item">
                <Link
                to="/login"
                className={
                    window.location.pathname === `/login` ? `nav-link active` : `nav-link`
                }
                >
                   Do you already have an account? Click here to login!
                </Link>
                </div>
    </div>
  );
}

export default Form;



