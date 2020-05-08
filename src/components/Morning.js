import React, { Component } from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Helmet } from "react-helmet";
import Button from "@material-ui/core/Button";
import indigo from "@material-ui/core/colors/indigo";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  continue: {
    fontWeight: 400,
    fontSize: 18,
    fontFamily: "Helvetica Neue",
    marginBottom: 40,
    marginTop: 40,
  },
}));

export default function Morning() {
  const styles = useStyles();
  return (
    <Container component="main" maxWidth="md">
      <div className={styles.paper}>
        <Typography>
          <h1>Morning </h1>
        </Typography>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
      </div>
      <Helmet>
        <style>{"body {background: #eeeeee}"}</style>
      </Helmet>
    </Container>
  );
}
