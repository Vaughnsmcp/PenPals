import React from "react";
import Header from "../components/Header";
import PortfolioForm from "../components/PortfolioForm";


function Portfolio(props) {
  return (
    <>
      <Header message="Build your showcase!" />
      <PortfolioForm history={props.history} />
    </>
  );
}
export default Portfolio;
//need to add more form functionality
