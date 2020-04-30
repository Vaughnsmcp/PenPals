import React from "react";
import Button from "./Button";

function Form(props) {
  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="username">username</label>
        <input
          className="form-control"
          value={props.username}
          type="text"
          placeholder="username"
        ></input>
        <label htmlFor="email">email</label>
        <input
          className="form-control"
          value={props.email}
          type="text"
          placeholder="email"
        ></input>
        <label htmlFor="password">password</label>
        <input
          className="form-control"
          value={props.password}
          type="text"
          placeholder="password"
        ></input>
      </div>
      <Button />
    </div>
  );
}

export default Form;
