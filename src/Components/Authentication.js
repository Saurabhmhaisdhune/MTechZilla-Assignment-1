import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import "./Authentication.css";
import { useNavigate } from "react-router-dom";

function Authentication() {
  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    localStorage.setItem("token", userObject.name);
    navigate("/home");
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "353304673918-rlt55dgcqg14v8ffemuc5j31jo8eg09m.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("loginDiv"), {
      fontSize: "15px",
      fontWeight: "500",
      lineHeight: "14.63px",
      color: "#787878",
      fontFamily: "Lato",
      borderRadius: "10px",
      width: "325px",
      height: "20px",
      border: "none",
    });
  }, []);

  return (
    <div className="login">
      <div className="left-side">
        Authentictaion <br/>Page
      </div>
      <div className="right-side">
        <div>
          <h1 className="signin-text">Login</h1>
          <h1 className="signin-message">Login to your account</h1>
          <div className="login-form">
            <div className="login-content">
              <h1 className="input-text">Email address</h1>
              <input
                type="email"
                className="inpts"
                placeholder="johndoe@gmail.com"
              ></input>
              <h1 className="input-text">Password</h1>
              <input
                type="password"
                className="inpts"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              ></input>
              <h1 className="forget-pass">Forgot password?</h1>
              <button className="login-button">Login</button>
              <div className="google-auth">
                <div id="loginDiv"></div>
              </div>
            </div>
          </div>
          <h1 className="register">
            Don't have an account?
            <span className="forget-pass"> Register here</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
