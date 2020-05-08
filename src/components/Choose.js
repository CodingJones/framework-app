import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Helmet } from "react-helmet";
import Grid from "@material-ui/core/Grid";
import Evening from "../images/evening.png";
import Morning from "../images/morning.png";
import indigo from "@material-ui/core/colors/indigo";

const primary = indigo[900]; /* #3f51b5*/

var tempDate = new Date();
var date =
  tempDate.getDate() +
  "/" +
  (tempDate.getMonth() + 1) +
  "-" +
  tempDate.getFullYear();

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
  pics: {
    maxWidth: 300,
    marginTop: 100,
  },
  picText: {
    marginTop: 10,
    fontFamily: "Helvetica Neue",
    color: primary,
    alignItems: "center",
    textAlign: "center",
    fontWeight: 350,
    fontSize: 24,
  },
  date: {
    marginTop: 30,
    fontFamily: "Helvetica Neue",
    color: primary,
    fontWeight: 350,
    fontSize: 42,
  },
}));

export default function Choose() {
  const styles = useStyles();
  const currDate = " " + date;

  return (
    <Container component="main" maxWidth="md">
      <div className={styles.paper}>
        <div className={styles.date}>{currDate}</div>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Link to="/components/Morning">
              <img src={Morning} className={styles.pics} />
            </Link>
            <Typography className={styles.picText}>Morning rutine</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link to="/components/Evening">
              <img src={Evening} className={styles.pics} />
            </Link>
            <Typography className={styles.picText}>Evening rutine</Typography>
          </Grid>
        </Grid>
      </div>
      <Helmet>
        <style>{"body {background: #eeeeee}"}</style>
      </Helmet>
    </Container>
  );
}
