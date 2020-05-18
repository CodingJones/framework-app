import React from "react";
import Racoon from "../images/racoon.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import Heading from "./Heading";
import media from "styled-media-query";

const WrapperLeft = styled.div`
  float: left;
  align-items: center;
  text-align: center;
  margin-top: 150px;
  margin-left: 80px;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin-top: 20px;
    margin-left: 0px;
  `}
`;

const RacoonImg = styled.img`
  position: absolute;
  right: 100px;
  bottom: 60px;
  max-width: 500px;
  border-radius: 100%;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    display: none;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    max-width: 300px
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
    <Container component="main">
      <Navbar />
      <WrapperLeft>
        <Heading h1>Reflect on your day.</Heading>
        <Heading h4>
          Reflect daily with questions, calm your thinking, organize your life.
        </Heading>
        <StyledLink to="/components/SignUp">
          <Button label="Sign Up"> </Button>
        </StyledLink>
      </WrapperLeft>
      <RacoonImg src={Racoon} alt="Racoon Img" />
    </Container>
  );
}
