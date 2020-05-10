import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import blue from "@material-ui/core/colors/blue";
import { Helmet } from "react-helmet";

const primary = blue[900]; /* #0d47a1 */

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
}));

export default function LogIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Card className={classes.cardStyle}>
        <CardContent>
          <div className={classes.paper}>
            <h3 className="header"> Log in</h3>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Grid item xs={12}>
                <Link to="/components/Success">
                  <button class="submitButton"> Log in </button>
                </Link>
              </Grid>
              <Grid container>
                <Helmet>
                  <style>{"body {background: #eeeeee}"}</style>
                </Helmet>
                <Grid item>
                  <Link to="/components/SignUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
