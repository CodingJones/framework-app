import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Button } from "./Button";

const Form = styled.form`
  width: "100%";
`;

const Header = styled.h1`
  font-size: 20px;
  color: #0d47a1;
  text-align: center;
  margin-top: 5px;
  font-weight: 350;
`;

const StyledLink = styled(Link)`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  color: #0d47a1;
`;

const Paper = styled.div`
  margin-top: 30;
  margin-right: 10;
  margin-left: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    marginTop: 30,
    paddingBottom: 30,
    margin: "auto",
    borderRadius: 40,
    maxWidth: 400,
  },
}));

export default function LogIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Card className={classes.cardStyle}>
        <CardContent>
          <Paper>
            <Header> Log in </Header>
            <Form>
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
              <Grid item xs={12}>
                <Link to="/components/Choose">
                  <Button label="Log in" />
                </Link>
              </Grid>
              <Grid>
                <Helmet>
                  <style>{"body {background: #eeeeee}"}</style>
                </Helmet>
                <Grid item>
                  <StyledLink to="/components/SignUp">
                    Don't have an account? Sign Up
                  </StyledLink>
                </Grid>
              </Grid>
            </Form>
          </Paper>
        </CardContent>
      </Card>
    </Container>
  );
}
