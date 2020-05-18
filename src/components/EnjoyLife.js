import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Heading from "./Heading";
import Sun from "../images/sun.png";
import RacoonLove from "../images/racoonLove.png";
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
    display: none;
  `}
`;

const RacoonLoveImg = styled.img`
  max-width: 350px;
  bottom: 100px;
  border-radius: 112px;
  margin-top: 40px;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width: 60%;
  `}
`;

export default function EnjoyLife() {
  return (
    <>
      <Wrapper>
        <Heading h2>Very good</Heading>
        <Heading h5>Have a nice day and remember to enjoy life!</Heading>
        <Helmet>
          <style>{"body {background: #F9BB30;}"}</style>
        </Helmet>
        <SunImg src={Sun} alt="Sun img" />
        <RacoonLoveImg src={RacoonLove} alt="Racoon img" />
      </Wrapper>
    </>
  );
}
