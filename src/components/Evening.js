import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { ButtonNext } from "./ButtonNext";
import { ButtonPrev } from "./ButtonPrev";
import Heading from "./Heading";
import { SmileyRating } from "./SmileyRating";
import { UserInput } from "./UserInput";

const Wrapper = styled.div`
  align-items: center;
  text-align: center;
`;

export default function Evening() {
  return (
    <Container component="main" maxWidth="xs">
      <Wrapper>
        <Heading h2 primary>
          Good Evening
        </Heading>
        <Heading h5 primary>
          How would you rate your day?
        </Heading>
        <SmileyRating />
        <Heading h5 primary>
          Questions:
        </Heading>
        <Heading p primary>
          To make you reflect upon your life
        </Heading>
        <UserInput />
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
    </Container>
  );
}
