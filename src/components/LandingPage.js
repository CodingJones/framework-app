import React, { Component } from "react";
import "../App.css";
import { Helmet } from "react-helmet";
import Racoon from "../images/racoon.png";
import { Navbar } from "./Navbar";
import { Button } from "./Button";

export class LandingPage extends Component {
  render() {
    return (
      <div className="containerLeft">
        <Navbar />
        <div className="row">
          <div className="col-xs-12">
            <h1 className="header">Reflect on your day.</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p className="subHeader">
              Reflect daily with questions, calm your thinking, organize your
              life.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <Button />
          </div>
        </div>
        <div className="row">
          <img class="racoonImg" src={Racoon} alt="racoon img" />
          <Helmet>
            <style>{"body {background: #0d47a1}"}</style>
          </Helmet>
        </div>
      </div>
    );
  }
}

export default LandingPage;
