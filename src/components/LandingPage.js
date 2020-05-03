import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Racoon from "../images/racoon.png";

export class LandingPage extends Component {
  render() {
    return (
      <div className="continaer">
        <Helmet>
          <style>{"body {background: #003E75}"}</style>
        </Helmet>
        <div class="row">
          <div class="col-xs-9 col-md-7">
            <h1 class="header">Reflect on your day.</h1>
            <p class="subHeader">
              Reflect daily with questions, calm your thinking, organize your
              life.
            </p>
            <Link to="/components/SignUp">
              <button class="signUpButton"> Sign Up </button>
            </Link>
          </div>
          <div class="col-xs-3 col-md-5">
            <nav class="navbar">
              <Link to="/components/SignIn">
                <button class="navLogInButton"> Log In </button>
              </Link>
              <Link to="/components/SignUp">
                <button class="navSignUpButton"> Sign Up </button>
              </Link>
            </nav>
            <div class="col-xs-3 col-md-5">
              <img class="racoonImg" src={Racoon} alt="racoon img" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
