import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Helmet } from "react-helmet";
import indigo from "@material-ui/core/colors/indigo";
import InputBase from "@material-ui/core/InputBase";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Sun from "../images/sun.png";
import Sun2 from "../images/sun2.png";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

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
    marginBottom: 10,
  },
  rating: {
    width: 200,
    display: "flex",
    alignItems: "center",
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

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export default function Morning() {
  const styles = useStyles();

  return (
    <Container maxWidth="lg">
      <img class="sunImg" src={Sun} alt="Sun img" />
      <img class="sun2Img" src={Sun2} alt="Sun2 img" />
      <div className={styles.paper}>
        <Typography className={styles.header}>Good morning, </Typography>
        <Typography className={styles.feel}>How do you feel today?</Typography>
        <Box component="fieldset" mb={1} borderColor="transparent">
          <Rating
            name="customized-icons"
            defaultValue={2}
            getLabelText={(value) => customIcons[value].label}
            IconContainerComponent={IconContainer}
          />
        </Box>
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
      </div>
    </Container>
  );
}
