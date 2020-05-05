
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import API from '../utils/API';

function Homepage() {
  const [writers, setWriters] = useState([]);

  useEffect(() => {
    loadWriters();
  }, []);
  function loadWriters() {
    API.getPoets()
    .then(res => setWriters(res.data))
    .catch(err => console.error(err));
  }
  
  return (
    <>
      <Header message="Welcome to Pen Pals"/>
      <Wrapper>
        <div className="row">
          {writers.map((writer, index) => (
            <div className="col-md-6" key={index}>
              <div className="card">
                <h1>{writer.name}</h1>
                <div className="img-container">
                  <img alt="poe" className="card-img-top" src={writer.image} />
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
