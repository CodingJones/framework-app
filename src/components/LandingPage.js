import React from "react";
import Racoon from "../images/racoon.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import Heading from "./Heading";

const WrapperLeft = styled.div`
  position: absolute;
  align-items: center;
  text-align: center;
  margin-left: 200px;
  margin-top: 180px;
`;

const RacoonImg = styled.img`
  position: absolute;
  right: 100px;
  bottom: 100px;
  max-width: 500px;
  border-radius: 100%;
`;

const StyledLink = styled(Link)`
  font-size: 26px;
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
