import React from "react";
import SignUpForm from "../components/SignUpForm";
import Header from "../components/Header";

function SignUp(props) {
  console.log(props);
  return (
    <>
      <Header message={"Sign-Up!"} />

      <SignUpForm history={props.history} />
    </>
  );
}
export default SignUp;
