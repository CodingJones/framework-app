import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledLink = styled(Link)`
  font-size: 12px;
  color: #0d47a1;
`;

const StyledLinkButton = styled(Link)`
  font-size: 16px;
`;

const Paper = styled.div`
  margin-top: 30px;
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CardContent>
          <Paper>
            <Heading h3>Log in</Heading>
            <form onSubmit={this.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Grid>
                <Grid xs={12}>
                  <StyledLinkButton to="/components/Choose">
                    <Button label="Log in" />
                  </StyledLinkButton>
                </Grid>
                <StyledLink to="/components/SignUp">
                  Don't have an account? Sign Up
                </StyledLink>
                <Helmet>
                  <style>{"body {background: #eeeeee}"}</style>
                </Helmet>
              </Grid>
            </form>
          </Paper>
        </CardContent>
      </Container>
    );
  }
}
