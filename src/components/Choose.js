import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { Helmet } from "react-helmet";
import Grid from "@material-ui/core/Grid";
import Evening from "../images/evening.png";
import Morning from "../images/morning.png";
import CurrentDate from "./CurrentDate";
import styled from "styled-components";

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
`;

const PicText = styled.h3`
  margin-top: 30px;
  font-family: "Helvetica Neue";
  color: #0d47a1;
  align-items: center;
  text-align: center;
  font-weight: 350;
  font-size: 24px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 300;
  line-height: 48px;
  text-align: center;
  color: #0d47a1;
`;

export default function Choose() {
  return (
    <Container component="main" maxWidth="md">
      <Paper>
        <Title>
          Choose reflection <br /> <CurrentDate />
        </Title>
        <Grid container spacing={1}>
          <Grid xs={12} sm={6}>
            <Link to="/components/Morning">
              <Pics src={Morning} alt="Morning img" />
            </Link>
            <PicText>Morning rutine </PicText>
          </Grid>
          <Grid xs={12} sm={6}>
            <Link to="/components/Evening">
              <Pics src={Evening} alt="Evening img" />
            </Link>
            <PicText>Evening rutine</PicText>
          </Grid>
        </Grid>
      </Paper>
      <Helmet>
        <style>{"body {background: #eeeeee}"}</style>
      </Helmet>
    </Container>
  );
}
