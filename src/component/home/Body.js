import React from "react";
import "./styles.css";

import svg from "../../logo.svg";
import Registration from "./Registration";

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="body_mess container">
          <img src={svg} alt="NETFLIX" className="logo" />
          <div className="sign_in">Sign In</div>
        </div>
        <div className="container unlimited">
          <h1 className="hero">Unlimited movies, TV shows and more.</h1>
          <h3 className="typography sub_title">
            Watch anywhere. Cancel anytime.
          </h3>
          <Registration />
        </div>
      </div>
    </>
  );
};

export default Body;
