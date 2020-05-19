import React, { Component } from "react";
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
  height: 100%;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin-top: 0px;
  `}
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
    height: 100%;
  `}
`;

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = this.state;
    console.log("Data is", data);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { firstName } = this.state;
    return (
      <>
        <StyledCard>
          <Paper>
            <CardContent>
              <Heading p>First name is: {firstName}</Heading>
              <Heading h3>Sign up Today!</Heading>
              <Grid item xs={12}>
                <Heading p>
                  Reflect is currently in an open Beta. <br /> Sign up to try it
                  out before the official release!
                </Heading>
              </Grid>
              <form onSubmit={this.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="firstName"
                      variant="outlined"
                      fullWidth
                      label="First Name"
                      type="text"
                      value={this.state.value}
                      onChange={this.handleChange}
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
                    <StyledLinkButton to="/components/Choose">
                      <Button label="Let's go!" />
                    </StyledLinkButton>
                  </Grid>
                  <Grid item xs={12}>
                    <StyledLink to="/components/LogIn">
                      Already have an account? Log in!
                    </StyledLink>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Paper>
        </StyledCard>
        <SleepyRacoonImg src={SleepyRacoon} alt="SleepyRacoonImg" />
      </>
    );
  }
}
