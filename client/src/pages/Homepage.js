import React from "react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import writers from "../writers";

function Homepage() {
  return (
    <>
      <Header message="Welcome to Pen Pals!!!!!!!!!!!!!!!!!" />
      <Wrapper>
        <div className="row">
          {writers.map((writer) => (
            <div className="col-md-6">
              <div className="card">
                <h1>{writer.name}</h1>
                <div className="img-container">
                  <img alt="poe" class="card-img-top" src={writer.image} />
                </div>
                <div className="content">
                  <h2>Bio:</h2>
                  <p>{writer.info}</p>
                  <h2>My skills:</h2>
                  <p>{writer.skills}</p>
                  <h2>What I'm looking for:</h2>
                  <p>{writer.inquiry}</p>
                  <h2>My Goals:</h2>
                  <p>{writer.goals}</p>
                  <h2>My links:</h2>
                  <a href={writer.link}>Check out my stuff!</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
}

export default Homepage;
