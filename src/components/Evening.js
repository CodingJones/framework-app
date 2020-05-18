import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Heading from "./Heading";
import { SmileyRating } from "./SmileyRating";
import { UserInput } from "./UserInput";
import ButtonSleep from "./ButtonSleep";
import ButtonEveningPrev from "./ButtonEveningPrev";
import EveningImgs from "./EveningImgs";

const Wrapper = styled.div`
  align-items: center;
  text-align: center;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
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
          Recap and reflect on your day
        </Heading>
        <Heading p primary>
          How could the day have been better?
        </Heading>
        <UserInput />
        <Heading p primary>
          In what silly ways did you waste your time today?
        </Heading>
        <UserInput />
        <Grid item xs={12}>
          <StyledLink to="/components/EnjoyLife">
            <ButtonSleep label="Sleep Tight" />
          </StyledLink>
        </Grid>
        <Grid item xs={12}>
          <StyledLink to="/components/Choose">
            <ButtonEveningPrev label="Previous" />
          </StyledLink>
        </Grid>
        <EveningImgs />
      </Wrapper>
    </Container>
  );
}
