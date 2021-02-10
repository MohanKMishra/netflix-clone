import React from "react";
import "./Login.css";
import svg from "../../logo.svg";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <>
      <div className="login_body">
        <div>
          <img src={svg} alt="NETFLIX" className="logo" />
        </div>

        <form className="form">
          <div className="text">Sign In</div>
          <input
            className="login_input"
            type="text"
            placeholder="Email or phone number"
          ></input>
          <input
            className="login_input"
            type="password"
            placeholder="Password"
          ></input>
          <input
            type="button"
            value="Sign In"
            className="button"
            onClick={() => history.push("/Movielist")}
          ></input>
          <div className="checkbox">
            <div className="check">
              <input type="checkbox" default="checked" />
              <label>Remember me</label>
            </div>
            <h6>Need help?</h6>
          </div>
          <div className="fb_logo">
            <i className="fab fa-facebook-f"></i>
            <p>Login with Facebook</p>
          </div>
          <div className="sign">
            <p>New to Netflix?</p>
            <p style={{ color: "white" }}>Sign up now</p>
          </div>
          <div className="mess">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.<span style={{ color: "blue" }}>Learn more</span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
