import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Racoon from "../images/racoon.png";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Navbar } from "./Navbar";

export class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="row">
          <div className="col-xs-9 col-md-7">
            <h1 className="header">Reflect on your day.</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-9 col-md-7">
            <p className="subHeader">
              Reflect daily with questions, calm your thinking, organize your
              life.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-9 col-md-7">
            <Link to="/components/SignUp">
              <button className="signUpButton"> Sign Up </button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-9 col-md-7">
            <img class="racoonImg" src={Racoon} alt="racoon img" />
          </div>
          <Helmet>
            <style>{"body {background: #0d47a1}"}</style>
          </Helmet>
        </div>
      </div>
    );
  }
}

export default LandingPage;
