import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Helmet } from "react-helmet";
import indigo from "@material-ui/core/colors/indigo";
import Slider from "@material-ui/core/Slider";
import InputBase from "@material-ui/core/InputBase";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const primary = indigo[900]; /* #3f51b5*/

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  header: {
    fontWeight: 500,
    fontSize: 36,
    fontFamily: "Helvetica Neue",
    color: primary,
    marginTop: 50,
  },
  feel: {
    fontWeight: 500,
    fontSize: 20,
    fontFamily: "Helvetica Neue",
    color: primary,
    marginTop: 30,
  },
  slider: {
    width: 300,
    marginTop: 50,
    color: primary,
  },
  writeField: {
    width: 400,
    height: 150,
  },
  subHeader: {
    fontWeight: 400,
    fontSize: 16,
    fontFamily: "Helvetica Neue",
    color: primary,
    marginTop: 5,
  },
}));

function valuetext(value) {
  return `${value}%`;
}

export default function Morning() {
  const styles = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={styles.paper}>
        <Typography>
          <Typography className={styles.header}>Good morning, </Typography>
          <Typography className={styles.feel}>
            How do you feel today?
          </Typography>
          <Slider
            className={styles.slider}
            defaultValue={0}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
          />
          <Typography className={styles.feel}>Monkey mind:</Typography>
          <Typography className={styles.subHeader}>
            {" "}
            Spend some minutes writing your feelings down
          </Typography>
          <div class="monkeyMind">
            <InputBase
              className={styles.writeField}
              id="outlined-multiline-static"
              multiline
              inputProps={{ "aria-label": "naked" }}
              rows={6}
            />
          </div>
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
        </Typography>
      </div>
    </Container>
  );
}
