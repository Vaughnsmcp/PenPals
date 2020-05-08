import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";

function PoetProfile(props) {
  const [poets, setPoets] = useState([]);

  useEffect(() => {
    loadPoets();
  }, []);

  function loadPoets() {
    API.getPoetById()
      .then((res) => setPoets(res.data._id))
      .catch((err) => console.error(err));
  }
  console.log(poets);
  return (
    <>
      <Header message={`Poet Profile`} />
      <Wrapper>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <h1>{poets.name}</h1>
              <div className="img-container">
                <img alt="profile" className="card-img-top" src={poets.image} />
              </div>
              <div className="content">
                <h2>Bio:</h2>
                <p>{poets.info}</p>
                <h2>My skills:</h2>
                <p>{poets.skills}</p>
                <h2>What I'm looking for:</h2>
                <p>{poets.inquiry}</p>
                <h2>My Goals:</h2>
                <p>{poets.goals}</p>
                <h2>My links:</h2>
                <a href={poets.link}>Check out my stuff!</a>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default PoetProfile;
