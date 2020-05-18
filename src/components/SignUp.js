import React from "react";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import SleepyRacoon from "../images/sleepyRacoon.png";
import styled from "styled-components";
import { CardContent } from "@material-ui/core";
import Button from "./Button";
import Heading from "./Heading";
import media from "styled-media-query";

const Paper = styled.div`
  margin-top: 30px;
  margin-right: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin-top: 0px;
  `}
`;

const Form = styled.form`
  width: 100%;
`;

const SubHeader = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  color: #0d47a1;
  text-align: center;
  margin-bottom: 40px;
`;

const SleepyRacoonImg = styled.img`
  position: absolute;
  max-width: 400px;
  right: 0px;
  bottom: 0px;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    display: none;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    max-width: 300px;
  `}
`;

const StyledLink = styled(Link)`
  font-size: 12px;
  color: #0d47a1;
`;

const StyledLinkButton = styled(Link)`
  font-size: 16px;
`;

const StyledCard = styled.div`
  margin-top: 30px;
  margin: auto;
  border-radius: 40px;
  width: 400px;
  background-color: #e5e5e5;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width: 100%;
    border-radius: 0px;
    margin-top; 0px;
    background-color: #e5e5e5;
  `}
`;

export default function SignUp() {
  return (
    <>
      <StyledCard>
        <Paper>
          <CardContent>
            <Heading h3> Sign up Today! </Heading>
            <Grid item xs={12}>
              <SubHeader>
                Reflect is currently in an open Beta. <br /> Sign up to try it
                out before the official release!
              </SubHeader>
            </Grid>
            <Form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstName"
                    variant="outlined"
                    fullWidth
                    label="First Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Last Name"
                    name="lastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Email"
                    name="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledLinkButton to="/components/Success">
                    <Button label="Let's go!" />
                  </StyledLinkButton>
                </Grid>
                <Grid item xs={12}>
                  <StyledLink to="/components/LogIn">
                    Already have an account? Log in!
                  </StyledLink>
                </Grid>
              </Grid>
            </Form>
          </CardContent>
        </Paper>
      </StyledCard>
      <SleepyRacoonImg src={SleepyRacoon} alt="SleepyRacoonImg" />
    </>
  );
}
