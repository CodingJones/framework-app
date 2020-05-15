import React from "react";
import Racoon from "../images/racoon.png";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import styled from "styled-components";

const WrapperLeft = styled.div`
  position: absolute;
  align-items: center;
  text-align: center;
  margin-left: 200px;
  margin-top: 150px;
  font-family: "Helvetica Neue";
`;

const RacoonImg = styled.img`
  position: absolute;
  right: 100px;
  bottom: 100px;
  max-width: 500px;
  border-radius: 100%;
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  font-weight: 400;
  color: #ffb236;
`;

const SubTitle = styled.h2`
  width: 400px;
  height: 200px;
  font-size: 2em;
  font-size: 28px;
  font-weight: 300;
  line-height: 48px;
  text-align: center;
  color: #e5e5e5;
`;

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <WrapperLeft>
        <Title>Reflect on your day.</Title>
        <SubTitle>
          Reflect daily with questions, calm your thinking, organize your life.
        </SubTitle>
        <Link to="/components/SignUp">
          <Button label="Sign Up" />
        </Link>
      </WrapperLeft>
      <RacoonImg src={Racoon} alt="Racoon Img" />
    </>
  );
}
