import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../utils/API";
import Button from "./Button";

function PortfolioForm() {
  const [formObject, setFormObject] = useState({});
  const onChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };
  console.log(formObject);

  const history = useHistory();

  function handleFormSubmit() {
    console.log("handleFormSubmit");

    if (
      formObject.name &&
      formObject.image &&
      formObject.info &&
      formObject.link &&
      formObject.skills &&
      formObject.inquiry &&
      formObject.goals
    ) {
      API.createPortfolio({
        name: formObject.name,
        image: formObject.image,
        info: formObject.info,
        link: formObject.link,
        skills: formObject.skills,
        inquiry: formObject.inquiry,
        goals: formObject.goals,
      })
        .then(() => {
          console.log(`Successfully made your Portfolio`);
          history.push("/");
        })
        .catch((err) => console.error(err));
    }
  }
  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          value={formObject.name || ""}
          name="name"
          onChange={onChange}
          type="text"
          placeholder="What's your name?"
        ></input>
        <label htmlFor="image">Profile Image</label>
        <input
          className="form-control"
          value={formObject.image || ""}
          name="image"
          onChange={onChange}
          type="link"
          placeholder="Input a link to your image!"
        ></input>
        <label htmlFor="link">Your Website</label>
        <input
          className="form-control"
          value={formObject.link || ""}
          name="link"
          onChange={onChange}
          type="link"
          placeholder="link here"
        ></input>
        <label htmlFor="skills">Skills</label>
        <input
          className="form-control"
          value={formObject.skills || ""}
          name="skills"
          onChange={onChange}
          type="text"
          placeholder="What are you skilled at?"
        ></input>
        <label htmlFor="inquiry">Inquiries</label>
        <input
          className="form-control"
          value={formObject.inquiry || ""}
          name="inquiry"
          onChange={onChange}
          type="text"
          placeholder="Who are you looking for?"
        ></input>
        <label htmlFor="goals">Your Goals</label>
        <input
          className="form-control"
          value={formObject.goals || ""}
          name="goals"
          onChange={onChange}
          type="text"
          placeholder="What are your personal goals?"
        ></input>
      </div>
      <Button
        className="btn btn-primary"
        disabled={
          !(
            formObject.name &&
            formObject.image &&
            formObject.info &&
            formObject.link &&
            formObject.skills &&
            formObject.inquiry &&
            formObject.goals
          )
        }
        onClick={handleFormSubmit}
      >
        Submit Your Portfolio
      </Button>
    </div>
  );
}

export default PortfolioForm;