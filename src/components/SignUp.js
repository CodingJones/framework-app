import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import SleepyRacoon from "../images/sleepyRacoon.png";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    marginTop: 30,
    paddingBottom: 30,
    margin: "auto",
    borderRadius: 40,
    maxWidth: 400,
  },
  paper: {
    marginTop: 30,
    marginRight: 10,
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
  },
  subHeader: {
    fontFamily: "Helvetica Neue",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    fontWeight: 400,
    marginBottom: 40,
    marginTop: 20,
  },
}));

function Dialog(props) {
  return (
    <div>
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
    </div>
  );
}

export default function SignUp() {
  const styles = useStyles();

  return (
    <div className="container">
      <div>
        <img class="sleepyRacoonImg" src={SleepyRacoon} alt="SleepyRacoonImg" />
      </div>
      <Card className={styles.cardStyle}>
        <CardContent>
          <div className={styles.paper}>
            <h3 className="header">Sign up Today! </h3>
            <Grid item xs={12}>
              <p className="text">
                Reflect is currently in an open Beta. <br /> Sign up to try it
                out before the official release!
              </p>
            </Grid>
            <form className={styles.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstName"
                    variant="outlined"
                    fullWidth
                    value={fname}
                    label="First Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Last Name"
                    name="lastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Email"
                    name="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Link to="/components/Success">
                    <button class="submitButton"> Let's go! </button>
                  </Link>
                  <Grid item>
                    <Link to="/components/LogIn" variant="body2">
                      {"Already have an account? Log in!"}
                    </Link>
                  </Grid>
                  <Helmet>
                    <style>{"body {background: #0d47a1}"}</style>
                  </Helmet>
                </Grid>
              </Grid>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
