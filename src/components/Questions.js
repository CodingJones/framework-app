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
import { UserInput } from "./UserInput";

const Wrapper = styled.div`
  align-items: center;
  text-align: center;
`;

export default function Morning() {
  return (
    <>
      <Wrapper>
        <Heading h2>Good morning</Heading>
        <Heading h5>Daily questions to make you feel better</Heading>
        <Heading p>Write three things down that makes you happy?</Heading>
        <UserInput />
        <Heading p>How could you make someone smile today?</Heading>
        <UserInput />
        <Grid item xs={12}>
          <Link to="/components/Todo">
            <ButtonNext label="Next" />
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link to="/components/Morning">
            <ButtonPrev label="Previous" />
          </Link>
        </Grid>
      </Wrapper>
      <SunImgs />
      <Helmet>
        <style>{"body {background: #eeeeee}"}</style>
      </Helmet>
    </>
  );
}
