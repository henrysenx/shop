import React from "react";
import "./Authentication.scss";
import SignIn from "../../components/sign-in/sign-in";
import Signup from "../../components/sign-up/sign-up";

const Authentication = () => {
  return (
    <div className="authentication">
      <SignIn />
      <Signup />
    </div>
  );
};

export default Authentication;
