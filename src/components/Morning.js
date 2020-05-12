import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Sun from "../images/sun.png";
import Sun2 from "../images/sun2.png";
import { SmileyRating } from "./SmileyRating";
import { UserInput } from "./UserInput";
import { Navbar } from "./Navbar";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

export default function Morning() {
  const styles = useStyles();

  return (
    <div className="containerCenter">
      <img class="sunImg" src={Sun} alt="Sun img" />
      <img class="sun2Img" src={Sun2} alt="Sun2 img" />
      <h3 className="header">
        {" "}
        <br />
        Good morning,
      </h3>
      <h5 className="header">How do you feel today?</h5>
      <SmileyRating /> <br />
      <h4 className="header">
        Monkey mind: <br />{" "}
      </h4>
      <h5 className="header">Spend some minutes writing down your thoughts</h5>
      <UserInput />
      <Grid item xs={12}>
        <Link to="/components/Questions">
          <button class="nextButton">Next</button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to="/components/Choose">
          <button class="prevButton">Previous</button>
        </Link>
      </Grid>
      <Helmet>
        <style>{"body {background: #eeeeee}"}</style>
      </Helmet>
    </div>
  );
}
