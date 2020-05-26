import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { Helmet } from "react-helmet";
import Grid from "@material-ui/core/Grid";
import Evening from "../images/evening.png";
import Morning from "../images/morning.png";
import CurrentDate from "./CurrentDate";
import styled from "styled-components";
import Heading from "./Heading";
import media from "styled-media-query";

const Paper = styled.div`
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Pics = styled.img`
  max-width: 250px;
  margin-top: 100px;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    max-width: 200px;
    margin-top: 50px;
  `}
`;

const Choose = () => {
  return (
    <Container component="main" maxWidth="md">
      <Paper>
        <Heading h2>Choose reflection</Heading>
        <Heading h5>
          <CurrentDate />
        </Heading>
        <Grid container spacing={1}>
          <Grid xs={12} sm={6}>
            <Link to="/components/Morning">
              <Pics src={Morning} alt="Morning img" />
            </Link>
            <Heading h2>Morning routine </Heading>
          </Grid>
          <Grid xs={12} sm={6}>
            <Link to="/components/Evening">
              <Pics src={Evening} alt="Evening img" />
            </Link>
            <Heading h2>Evening routine</Heading>
          </Grid>
        </Grid>
      </Paper>
      <Helmet>
        <style>{"body {background: #eeeeee}"}</style>
      </Helmet>
    </Container>
  );
};

export default Choose;
