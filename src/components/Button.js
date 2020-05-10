import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export class Button extends Component {
  render() {
    return (
      <Link to="/components/SignUp">
        <button className="signUpButton"> Sign Up </button>
      </Link>
    );
  }
}
