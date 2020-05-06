import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Helmet } from "react-helmet";
import Button from "@material-ui/core/Button";
import indigo from "@material-ui/core/colors/indigo";

const primary = indigo[900]; /* #3f51b5*/

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    marginTop: 60,
    paddingBottom: 30,
    margin: "auto",
    borderRadius: 40,
  },
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
    color: primary,
    marginBottom: 40,
    marginTop: 40,
  },
}));

export default function Success() {
  const styles = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Card className={styles.cardStyle}>
        <CardContent>
          <div className={styles.paper}>
            <Typography>
              <h1>Success! </h1> <br />
              <h4>Welcome onboard </h4>
            </Typography>
            <Link to="/components/Choose">
              <Button className={styles.continue} variant="outlined">
                Start reflecting
              </Button>
            </Link>
          </div>
          <Helmet>
            <style>{"body {background: #eeeeee}"}</style>
          </Helmet>
        </CardContent>
      </Card>
    </Container>
  );
}
