import React from "react";
import Header from "../components/Header";
import PortfolioForm from "../components/PortfolioForm";

function Portfolio(props) {
  return (
    <>
      <Header message="Build your showcase!" />
      <PortfolioForm
        history={props.history}
        userId={props.userId}
        setPoetId={props.setPoetId}
        isUpdating={props.isUpdating}
        poetId={props.poetId}
      />
    </>
  );
}
export default Portfolio;
