import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Racoon from "../images/racoon.png";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export class Navbar extends Component {
  render() {
    return (
      <nav class="navbar">
        <Link to="/components/LogIn">
          <button class="navLogInButton"> Log In </button>
        </Link>
        <Link to="/components/SignUp">
          <button class="navSignUpButton"> Sign Up </button>
        </Link>
      </nav>
    );
  }
}
