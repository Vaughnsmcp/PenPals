import React from "react";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";

function Portfolio() {
  return (
    <>
      <Header message="Build your showcase!" />
      <Wrapper>
        <form>
          <div class="form-group">
            <label for="exampleFormControlFile1">
              Add your beautiful face!
            </label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            ></input>
          </div>
        </form>
      </Wrapper>
    </>
  );
}
export default Portfolio;
//need to add more form functionality
