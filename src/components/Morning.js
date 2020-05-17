import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Sun from "../images/sun.png";
import Sun2 from "../images/sun2.png";
import { SmileyRating } from "./SmileyRating";
import { UserInput } from "./UserInput";
import styled from "styled-components";
import { ButtonNext } from "./ButtonNext";
import { ButtonPrev } from "./ButtonPrev";

const Wrapper = styled.div`
  align-items: center;
  text-align: center;
  font-family: "Helvetica Neue";
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

const HeaderText = styled.h1`
  font-size: 28px;
  text-align: center;
  font-weight: 400;
  color: #0d47a1;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const SubHeader = styled.h2`
  font-size: 18px;
  color: #0d47a1;
  text-align: center;
  font-weight: 350;
`;

const PageText = styled.p`
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  color: #0d47a1;
  font-style: italic;
`;

export default function Morning() {
  return (
    <Container component="main" maxWidth="xs">
      <Wrapper>
        <HeaderText>Good morning,()</HeaderText>
        <SubHeader>How do you feel today?</SubHeader>
        <SmileyRating />
        <SubHeader>Monkey mind:</SubHeader>
        <PageText>Spend some minutes writing down your thoughts</PageText>
        <UserInput />
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
