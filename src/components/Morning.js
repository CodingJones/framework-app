import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Helmet } from "react-helmet";
import indigo from "@material-ui/core/colors/indigo";
import Slider from "@material-ui/core/Slider";
import InputBase from "@material-ui/core/InputBase";

const primary = indigo[900]; /* #3f51b5*/

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
    width: 325,
    height: 150,
  },
}));

function valuetext(value) {
  return `${value}%`;
}

export default function Morning() {
  const styles = useStyles();

  return (
    <Container component="main" maxWidth="md">
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
          <div class="monkeyMind">
            <InputBase
              className={styles.writeField}
              id="outlined-multiline-static"
              multiline
              inputProps={{ "aria-label": "naked" }}
              rows={6}
            />
          </div>
          <Helmet>
            <style>{"body {background: #eeeeee}"}</style>
          </Helmet>
        </Typography>
      </div>
    </Container>
  );
}
