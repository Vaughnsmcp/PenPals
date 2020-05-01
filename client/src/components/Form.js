import React from "react";
import Button from "./Button";

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
      <Button />
    </div>
  );
}

export default Form;



