import React from "react";
import Racoon from "../images/racoon.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import styled from "styled-components";
import Heading from "./Heading";
import media from "styled-media-query";

const WrapperLeft = styled.div`
  float: left;
  align-items: center;
  text-align: center;
  margin-top: 150px;
  margin-left: 250px;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin-top: 60px;
    margin-left: 0px;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    margin-top: 100px;
    margin-left: 20%;
  `}
`;

const RacoonImg = styled.img`
  position: absolute;
  right: 40px;
  bottom: 20px;
  max-width: 400px;
  border-radius: 100%;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    display:none
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width: 30%;
    right: 20px;
    bottom: 10px;
  `}
`;

const StyledLink = styled(Link)`
  font-size: 26px;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    font-size: 16px;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    font-size: 22px;
  `}
`;

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <WrapperLeft>
        <Heading h1>Reflect on your day.</Heading>
        <Heading h4>
          Reflect daily with questions, calm your thinking, organize your life.
        </Heading>
        <StyledLink to="/components/SignUp">
          <Button label="Sign Up"> </Button>
        </StyledLink>
        <RacoonImg src={Racoon} alt="Racoon Img" />
      </WrapperLeft>
    </>
  );
}
