import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Helmet } from "react-helmet";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import "../App.css";
import Container from "@material-ui/core/Container";
import SleepyRacoon from "../images/sleepyRacoon.png";

const primary = indigo[900]; /* #3f51b5*/

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    marginTop: 30,
    paddingBottom: 30,
    margin: "auto",
    borderRadius: 40,
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
  header: {
    fontWeight: 500,
    fontSize: 36,
    fontFamily: "Helvetica Neue",
    color: primary,
  },
  subHeader: {
    fontFamily: "Helvetica Neue",
    display: "flex",
    color: primary,
    alignItems: "center",
    textAlign: "center",
    fontWeight: 400,
    marginBottom: 40,
    marginTop: 20,
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <img
          class="sleepyRacoonImg"
          src={SleepyRacoon}
          alt="Sleepy Racoon img"
        />
      </div>
      <Card className={classes.cardStyle}>
        <CardContent>
          <div className={classes.paper}>
            <Typography className={classes.header}>Sign up Today! </Typography>
            <Grid item xs={12}>
              <Typography className={classes.subHeader}>
                Reflect is currently in an open Beta. <br /> Sign up to try it
                out before the official release!
              </Typography>
            </Grid>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstName"
                    variant="outlined"
                    fullWidth
                    id="firstName"
                    label="First Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="email"
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
                    id="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Link to="/components/Success">
                    <button class="submitButton"> Let's go! </button>
                  </Link>
                  <Helmet>
                    <style>{"body {background: #0d47a1}"}</style>
                  </Helmet>
                </Grid>
              </Grid>
            </form>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
