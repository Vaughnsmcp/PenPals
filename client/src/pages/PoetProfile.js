import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";

function PoetProfile() {
  const [poets, setPoets] = useState([]);

  useEffect(() => {
    loadPoets();
  }, []);

  function loadPoets() {}
  return (
    <>
      <Header message={`Poet Profile`} />
      <Wrapper>
        <div className="row">
          {poets.map((poet, index) => (
            <div className="col-md-12" key={index}>
              <div className="card">
                <h1>{poet.name}</h1>
                <div className="img-container">
                  <img
                    alt="profile"
                    className="card-img-top"
                    src={poet.image}
                  />
                </div>
                <div className="content">
                  <h2>Bio:</h2>
                  <p>{poet.info}</p>
                  <h2>My skills:</h2>
                  <p>{poet.skills}</p>
                  <h2>What I'm looking for:</h2>
                  <p>{poet.inquiry}</p>
                  <h2>My Goals:</h2>
                  <p>{poet.goals}</p>
                  <h2>My links:</h2>
                  <a href={poet.link}>Check out my stuff!</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
}

export default PoetProfile;
