import React, { Component } from "react";
import "../App.css";
import { Helmet } from "react-helmet";
import Racoon from "../images/racoon.png";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="container">
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
            <Link to="/components/SignUp">
              <Button label="Sign Up" />
            </Link>
          </div>
        </div>
        <div className="row">
          <img class="racoonImg" src={Racoon} alt="racoon img" />
          <Helmet>
            <style>{"body {background: #0d47a1}"}</style>
          </Helmet>
        </div>
      </div>
    </>
  );
}
