import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { SmileyRating } from "./SmileyRating";
import { UserInput } from "./UserInput";
import styled from "styled-components";
import { ButtonNext } from "./ButtonNext";
import { ButtonPrev } from "./ButtonPrev";
import Heading from "./Heading";
import SunImgs from "./SunImgs";

const Wrapper = styled.div`
  align-items: center;
  text-align: center;
`;

const Morning = () => {
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
      <SunImgs />
      <Helmet>
        <style>{"body {background: #eeeeee}"}</style>
      </Helmet>
    </>
  );
};

export default Morning;
