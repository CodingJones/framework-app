import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { ButtonNext } from "./ButtonNext";
import { ButtonPrev } from "./ButtonPrev";
import Heading from "./Heading";
import SunImgs from "./SunImgs";

const Wrapper = styled.div`
  align-items: center;
  text-align: center;
`;

export default function Todo() {
  return (
    <Container component="main" maxWidth="xs">
      <Wrapper>
        <Heading h2>Good morning</Heading>
        <Heading h5>Todos for today:</Heading>
        <Heading p>Make the best out of today</Heading>

        <Grid item xs={12}>
          <Link to="/components/Questions">
            <ButtonNext label="Next" />
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link to="/components/Questions">
            <ButtonPrev label="Previous" />
          </Link>
        </Grid>
      </Wrapper>
      <SunImgs />
      <Helmet>
        <style>{"body {background: #eeeeee}"}</style>
      </Helmet>
    </Container>
  );
}
