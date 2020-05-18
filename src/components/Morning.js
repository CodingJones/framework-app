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
import Heading from "./Heading";
import media from "styled-media-query";

const Wrapper = styled.div`
  align-items: center;
  text-align: center;
`;

const SunImg = styled.img`
  position: absolute;
  max-width: 350px;
  left: 20px;
  top: 20px;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    max-width: 25%;
    left: 1%;
    top: 1%;
  `}
`;

const SunImg2 = styled.img`
  position: absolute;
  max-width: 300px;
  right: 20px;
  top: 40px;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    max-width: 25%;
    right: 1%;
    top: 1%;
  `}
`;

export default function Morning() {
  return (
    <>
      <Wrapper>
        <Heading h2>Good morning</Heading>
        <Heading h5>How do you feel today?</Heading>
        <SmileyRating />
        <Heading h5>Monkey mind:</Heading>
        <Heading p>Spend some minutes writing down your thoughts</Heading>
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
    </>
  );
}
