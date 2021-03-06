import React from "react";
import SignUpForm from "../components/SignUpForm";
import Header from "../components/Header";

function SignUp(props) {
  return (
    <>
      <Header message={"Sign-Up!"} />

      <SignUpForm history={props.history} setUserId={props.setUserId} />
    </>
  );
}
export default SignUp;
