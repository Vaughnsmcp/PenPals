import React, { useState } from "react";
import Button from "./Button";
import { Link } from 'react-router-dom';


function Form(props) {
  const [formObject, setFormObject] = useState ({});
  const onChange = (event) => {
    const {name, value} = event.target; 
    setFormObject ({...formObject, [name]: value}); 
  }
  console.log(formObject);
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
          type="text"
          placeholder="password"
        ></input>
      </div>
      {/* <Button */}
        {/* className="nav-item"> */}
        <Link
          to="/portfolio"
          className={
            window.location.pathname === `/portfolio` ? `nav-link active btn btn-primary` : `nav-link btn btn-primary`
          }
        >
          Sign Up
        </Link>
      
        {/* </Button> */}
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



