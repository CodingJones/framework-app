import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <body class="landingPage">
          <h1 class="header">Reflect on your day.</h1>
          <p class="subHeader">
            Reflect daily with questions, calm your thinking, organize your
            life.
          </p>
          <Link to="/components/UserForm">
            <button class="signUpButton"> Sign Up </button>
          </Link>
        </body>
      </div>
    );
  }
}

export default LandingPage;
