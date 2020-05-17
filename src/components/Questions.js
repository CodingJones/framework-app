import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Sun from "../images/sun.png";
import Sun2 from "../images/sun2.png";
import { QuestionsInput } from "./QuestionsInput";
import styled from "styled-components";
import { ButtonNext } from "./ButtonNext";
import { ButtonPrev } from "./ButtonPrev";
import Heading from "./Heading";

const Wrapper = styled.div`
  align-items: center;
  text-align: center;
`;

const SunImg = styled.img`
  position: absolute;
  max-width: 350px;
  left: 20px;
  top: 20px;
`;

const SunImg2 = styled.img`
  position: absolute;
  max-width: 300px;
  right: 20px;
  top: 40px;
`;

export default function Morning() {
  return (
    <Container component="main" maxWidth="xs">
      <Wrapper>
        <Heading h2>Good morning</Heading>
        <Heading h5>Daily questions to make you feel better</Heading>
        <Heading p>Write three things down that makes you happy?</Heading>
        <QuestionsInput />
        <Heading p>How could you make someone smile today?</Heading>
        <QuestionsInput />
        <Grid item xs={12}>
          <Link to="/components/Questions">
            <ButtonNext label="Next" />
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link to="/components/Choose">
            <ButtonPrev label="Previous" />
          </Link>
        </Grid>
      </Wrapper>
      <SunImg src={Sun} alt="Sun img" />
      <SunImg2 src={Sun2} alt="Sun2 img" />
      <Helmet>
        <style>{"body {background: #eeeeee}"}</style>
      </Helmet>
    </Container>
  );
}
