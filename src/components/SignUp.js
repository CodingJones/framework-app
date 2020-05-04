import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { Helmet } from "react-helmet";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import orange from "@material-ui/core/colors/orange";
import sleepyRacoon from "../images/sleepyRacoon.png";

const primary = indigo[500];
const secondary = orange[400];

const useStyles = makeStyles((theme) => ({
  bodyColor: {
    backgroundColor: "#003E75",
  },
  cardStyle: {
    maxWidth: 500,
    marginTop: 60,
    paddingBottom: 60,
    margin: "auto",
    borderRadius: 40,
  },
  paper: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: 5,
  },
  submit: {
    margin: "auto",
    padding: "15px 60px 15px 60px",
    maxWidth: 200,
    marginTop: 60,
    borderRadius: 40,
    fontSize: 16,
    fontWeight: 400,
    fontStyle: "normal",
    backgroundColor: secondary,
    textTransform: "none",
    fontFamily: ["Helvetica Neue"].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
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
    <div>
      <Card className={classes.cardStyle}>
        <CardContent>
          <div className={classes.paper}>
            <Typography className={classes.header}>Sign up Today! </Typography>
            <Grid item xs={12}>
              <Typography className={classes.subHeader}>
                Reflect is currently in an open Beta. <br /> Sign up to to try
                it out before the official release!
              </Typography>
            </Grid>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                  />
                </Grid>
              </Grid>
              <Grid container justify="flex-end">
                <Button variant="contained" className={classes.submit}>
                  Let's go!
                </Button>
              </Grid>
              <Helmet>
                <style>{"body {background: #003E75}"}</style>
              </Helmet>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
