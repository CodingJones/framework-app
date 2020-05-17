import React from "react";
import Racoon from "../images/racoon.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import Container from "@material-ui/core/Container";
import styled from "styled-components";

const WrapperLeft = styled.div`
  position: absolute;
  align-items: center;
  text-align: center;
  margin-left: 200px;
  margin-top: 180px;
  font-family: "Helvetica Neue";
`;

const RacoonImg = styled.img`
  position: absolute;
  right: 100px;
  bottom: 100px;
  max-width: 500px;
  border-radius: 100%;
`;

const Header = styled.h1`
  font-size: 48px;
  text-align: center;
  font-weight: 400;
  color: #ffb236;
  margin-bottom: 20px;
`;

const SubHeader = styled.h2`
  width: 400px;
  font-size: 22px;
  font-weight: 300;
  text-align: center;
  color: #e5e5e5;
  margin-bottom: 100px;
`;

const StyledLink = styled(Link)`
  font-size: 26px;
`;

export default function LandingPage() {
  return (
    <Container component="main">
      <Navbar />
      <WrapperLeft>
        <Header>Reflect on your day.</Header>
        <SubHeader>
          Reflect daily with questions, calm your thinking, organize your life.
        </SubHeader>
        <StyledLink to="/components/SignUp">
          <Button label="Sign Up"> </Button>
        </StyledLink>
      </WrapperLeft>
      <RacoonImg src={Racoon} alt="Racoon Img" />
    </Container>
  );
}
